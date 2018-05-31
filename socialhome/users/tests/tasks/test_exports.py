import os

from django.conf import settings
from django.test import override_settings
from freezegun import freeze_time

from socialhome.content.enums import ContentType
from socialhome.content.tests.factories import ContentFactory
from socialhome.tests.utils import SocialhomeTestCase
from socialhome.users.tasks.exports import UserExporter, create_user_export
from socialhome.users.tests.factories import UserFactory, PublicProfileFactory


@freeze_time('2018-05-30')
@override_settings(SOCIALHOME_EXPORTS_PATH='/tmp/socialhome/exports')
class TestCreateUserExport(SocialhomeTestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.user = UserFactory()

    def setUp(self):
        super().setUp()
        export_path = '%s/%s' % (settings.SOCIALHOME_EXPORTS_PATH, self.user.id)
        if os.path.isdir(export_path):
            for file in os.listdir(export_path):
                os.unlink(os.path.join(export_path, file))

    def test_export_create(self):
        create_user_export(self.user.id)
        self.assertTrue(
            os.path.isfile(
                os.path.join(settings.SOCIALHOME_EXPORTS_PATH, '%s' % self.user.id, '127.0.0.1:8000-2018-05-30.zip')
            )
        )


class TestUserExporter(SocialhomeTestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.user = UserFactory()
        cls.profile = cls.user.profile
        cls.follower = PublicProfileFactory()
        cls.follower2 = PublicProfileFactory()
        cls.profile.following.add(cls.follower)
        cls.profile.following.add(cls.follower2)
        cls.content = ContentFactory(author=cls.profile)
        cls.content2 = ContentFactory(author=cls.follower)
        cls.reply = ContentFactory(author=cls.profile, parent=cls.content2, content_type=ContentType.REPLY)
        cls.share = ContentFactory(author=cls.profile, share_of=cls.content2, content_type=ContentType.SHARE)

    def test_collect_data(self):
        exporter = UserExporter(user=self.user)
        exporter.create()
        self.assertTrue("user" in exporter.data)
        self.assertTrue("profile" in exporter.data)
        self.assertEqual(len(exporter.data.get('following')), 2)
        contents = exporter.data.get('content')
        self.assertEqual(len(contents), 3)
        self.assertEqual(contents[0].get('guid'), self.content.guid)
        self.assertEqual(contents[1].get('guid'), self.reply.guid)
        self.assertEqual(contents[2].get('guid'), self.share.guid)