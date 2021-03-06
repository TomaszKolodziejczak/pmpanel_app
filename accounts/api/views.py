from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os
import pickle
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, UpdateUserSerializer

from accounts.models import CustomUser


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


# Get All Users API
class AllUserAPI(generics.ListAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get(self, request, format=None):
        """
        Return a list of all users.
        """

        userEmail = self.request.user.email

        users = CustomUser.objects.exclude(email=userEmail)

        usernames = [{'id': user.id, 'email': user.email, 'first_name': user.first_name}
                     for user in users]

        return Response(usernames)


# Get One User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


# Update User API
class UpdateAPI(generics.UpdateAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UpdateUserSerializer

    def get_object(self):
        return self.request.user


# class Assets(View):

#     def get(self, _request, filename):
#         path = os.path.join(os.path.dirname(__file__),
#                             'build/static', filename)

#         if os.path.isfile(path):
#             with open(path, 'rb') as file:
#                 return HttpResponse(file.read(), content_type='application/javascript')
#         else:
#             return HttpResponseNotFound()
