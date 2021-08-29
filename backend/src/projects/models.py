from django.db import models
from django.db.models.deletion import SET_DEFAULT
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth import get_user_model

STATUS_CHOICES = (
    (0, 'New'),
    (1, 'Kickoff meeting'),
    (2, 'Ongoing'),
    (3, 'Last fixes'),
    (4, 'Finished'),
)

User = settings.AUTH_USER_MODEL
all_users = get_user_model().objects.all()


class Project(models.Model):
    project_name = models.CharField(max_length=32)
    start_date = models.DateField(blank=True, default='2020-01-01')
    end_date = models.DateField(blank=True, default='2020-01-01')
    status = models.SmallIntegerField(choices=STATUS_CHOICES, default='0')
    description = models.TextField(blank=True, null=True)
    created_date = models.DateField(auto_now_add=True, null=True)
    last_modified = models.DateField(auto_now=True, null=True)
    author = models.ForeignKey(
        User, on_delete=SET_DEFAULT, default='author unknown', related_name='authors', null=True)
    participants = models.ManyToManyField(
        User, blank=True, related_name='participants_set')
