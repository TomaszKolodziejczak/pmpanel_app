from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _

CHOICES = (
    (0, ''),
    (1, 'Male'),
    (2, 'Female'),
)


class CustomUserManager(BaseUserManager):

    def create_superuser(self, email, first_name, password, last_name, age, sex, phone):
        """
        Creates and saves a staff user with the given email and password.
        """

        return self.create_user(email, first_name, password, last_name, age, sex, phone, is_staff=True, is_superuser=True)

    def create_user(self, email, first_name, password, last_name, age, sex, phone):

        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            password=password,
            last_name=last_name,
            age=age,
            sex=sex,
            phone=phone
        )

        user.set_password(password)
        user.save(using=self._db)  # using=self._db ??

        return user


#     def create_superuser(self, email, password, first_name, last_name, age, sex, phone=None):
#         """
#         Creates and saves a superuser with the given email and password.
#         """
#         user = self.create_user(
#             email,
#             password=password,
#             first_name=first_name,
#             last_name=last_name,
#             age=age,
#             sex=sex,
#             phone=phone,
#         )
#         user.staff = True
#         user.admin = True
#         user.save(using=self._db)
#         return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email adress'), max_length=256, unique=True)
    first_name = models.CharField(max_length=16, default='firstname')
    last_name = models.CharField(
        max_length=32, default='lastname', null=True, blank=True)
    age = models.PositiveIntegerField(blank=True, null=True)
    sex = models.SmallIntegerField(choices=CHOICES, blank=True, null=True)
    phone = models.CharField(max_length=12, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)  # a superuser

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'

    # Email & Password are required by default.
    REQUIRED_FIELDS = ['first_name']

#     def get_full_name(self):
#         # The user is identified by their email address
#         return self.email

#     def get_short_name(self):
#         # The user is identified by their email address
#         return self.email

    def __str__(self):
        return self.first_name

#     def has_perm(self, perm, obj=None):
#         "Does the user have a specific permission?"
#         # Simplest possible answer: Yes, always
#         return True

#     def has_module_perms(self, app_label):
#         "Does the user have permissions to view the app `app_label`?"
#         # Simplest possible answer: Yes, always
#         return True

#     @property
#     def is_staff(self):
#         "Is the user a member of staff?"
#         return self.staff

#     @property
#     def is_admin(self):
#         "Is the user a admin member?"
#         return self.admin
