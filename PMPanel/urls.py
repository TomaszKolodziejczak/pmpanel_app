from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('projects.api.urls')),
    path('users/', include('accounts.api.urls')),
    path('comments/', include('comments.api.urls')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]
