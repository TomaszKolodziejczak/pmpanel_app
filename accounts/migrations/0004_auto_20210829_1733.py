# Generated by Django 3.2.6 on 2021-08-29 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20210828_1645'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='last_name',
            field=models.CharField(blank=True, default='lastname', max_length=32, null=True),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='sex',
            field=models.SmallIntegerField(blank=True, choices=[(0, ''), (1, 'Male'), (2, 'Female')], null=True),
        ),
    ]