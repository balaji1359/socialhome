# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-06-03 14:05
from __future__ import unicode_literals

from django.db import migrations
from django.db.migrations import RunPython


def forward(apps, schema_editor):
    User = apps.get_model("users", "User")
    for user in User.objects.all():
        for profile in user.followers.all():
            profile.following.add(user.profile)
        for profile in user.following.all():
            user.profile.following.add(profile)


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0020_profile_following'),
    ]

    operations = [
        RunPython(forward, RunPython.noop)
    ]
