from django.urls import path
from django.urls.conf import include
from knox import views as knox_views

from .views import (
    RegisterAPI,
    LoginAPI,
    UpdateAPI,
    UserAPI,
    AllUserAPI,
    UpdateAPI
)

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
    path('auth/update/<pk>', UpdateAPI.as_view()),
    path('auth/users', AllUserAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/logout', knox_views.LoginView.as_view(), name='knox_logout'),
]
