from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

from django.db.models import query
from .serializers import ProjectSerializer
from rest_framework import permissions
from projects.models import Project
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView,
)


# class ProjectAuthorAndParticipantsPermission(permissions.BasePermission):
#     message = 'Viewing projects is restricted to the author or coworkers only.'

#     def has_object_permission(self, request, view, obj):
#         if request.method in permissions.SAFE_METHODS:

#             return request.user.id in obj.participants or request.user.id == obj.author.id

class ProjectListView(ListAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ProjectSerializer

    def get_queryset(self):

        authors_projects = self.request.user.authors.all()
        participants_projects = self.request.user.participants_set.all()

        all_projects = authors_projects.union(participants_projects)

        return all_projects

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ProjectCreateView(CreateAPIView):

    serializer_class = ProjectSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.authors.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ProjectUpdateView(UpdateAPIView):

    serializer_class = ProjectSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.authors.all()


class ProjectDeleteView(DestroyAPIView):

    serializer_class = ProjectSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.authors.all()


class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__),
                            'build/static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
