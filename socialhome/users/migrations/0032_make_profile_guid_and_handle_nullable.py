# Generated by Django 2.0.5 on 2018-07-31 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0031_make_profile_fid_not_null'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='guid',
            field=models.CharField(blank=True, editable=False, max_length=255, null=True, unique=True, verbose_name='GUID'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='handle',
            field=models.CharField(blank=True, editable=False, max_length=255, null=True, unique=True, verbose_name='Handle'),
        ),
    ]
