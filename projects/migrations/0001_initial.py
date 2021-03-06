# Generated by Django 3.2.6 on 2021-08-28 12:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=32)),
                ('start_date', models.DateField(blank=True, default='2020-01-01')),
                ('end_date', models.DateField(blank=True, default='2020-01-01')),
                ('status', models.SmallIntegerField(choices=[(0, 'New'), (1, 'Kickoff meeting'), (2, 'Ongoing'), (3, 'Last fixes'), (4, 'Finished')], default='0')),
                ('description', models.TextField(blank=True, null=True)),
                ('created_date', models.DateField(auto_now_add=True, null=True)),
                ('last_modified', models.DateField(auto_now=True, null=True)),
                ('author', models.ForeignKey(default='author unknown', null=True, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='authors', to=settings.AUTH_USER_MODEL)),
                ('participants', models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
