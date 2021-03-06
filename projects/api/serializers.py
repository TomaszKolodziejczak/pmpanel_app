from rest_framework import serializers
from projects.models import Project
from projects.models import STATUS_CHOICES


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
