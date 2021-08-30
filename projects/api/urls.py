from django.urls import path
from projects.api.views import (
    ProjectListView,
    ProjectCreateView,
    ProjectUpdateView,
    ProjectDeleteView,
)

urlpatterns = [

    path('', ProjectListView.as_view()),
    path('create', ProjectCreateView.as_view()),
    path('update/<pk>', ProjectUpdateView.as_view()),
    path('delete/<pk>', ProjectDeleteView.as_view()),

]
