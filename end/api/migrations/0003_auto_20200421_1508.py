# Generated by Django 3.0.4 on 2020-04-21 10:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200421_1442'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='image_url',
            new_name='imageUrl',
        ),
        migrations.RemoveField(
            model_name='order',
            name='user',
        ),
    ]