from django.urls import path

from .views import (
    CommentListView,
    CommentCreateView,
    CommentUpdateView,
    CommentDeleteView
)

urlpatterns = [
    path('', CommentListView.as_view()),
    path('create', CommentCreateView.as_view()),
    path('update/<pk>', CommentUpdateView.as_view()),
    path('delete/<pk>', CommentDeleteView.as_view()),
]
