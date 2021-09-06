from rest_framework import serializers
from accounts.models import CustomUser as User
from django.contrib.auth import authenticate


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password']


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'password',
                  'last_name', 'age', 'sex', 'phone')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['email'], validated_data['first_name'], validated_data['password'],
            validated_data['last_name'], validated_data['age'], validated_data['sex'], validated_data['phone'])

        return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name',
                  'last_name', 'age', 'sex', 'phone')

        def validate(self, data):
            user = authenticate(**data)
            if user and user.is_active:
                return user
