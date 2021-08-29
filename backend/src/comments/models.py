from django.db import models
from django.contrib.auth import get_user_model
from accounts.models import CustomUser as User
from projects.models import Project
from django.db.models.deletion import SET_DEFAULT, CASCADE
from django.conf import settings

User = settings.AUTH_USER_MODEL
all_users = get_user_model().objects.all()


class Comment(models.Model):
    text = models.TextField(blank=True)
    author = models.ForeignKey(
        User, on_delete=SET_DEFAULT, default='author unknown', related_name='comment_author', blank=True)
    last_modified = models.DateTimeField(auto_now=True)
    created_date = models.DateTimeField(auto_now_add=True)
    projectID = models.ForeignKey(
        Project, on_delete=CASCADE, related_name='project_comment', blank=True)
