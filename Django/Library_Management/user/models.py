from django.contrib.auth.models import AbstractUser
from django.db import models

class customUser(AbstractUser):
    email = models.EmailField(unique=True)
    pic = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    class Meta:
        # Assuming 'user' is the name of your app containing the CustomUser model
        db_table = 'user_customuser'  # Specify the table name in the database if needed
        verbose_name = 'Custom User'
        verbose_name_plural = 'Custom Users'

# Provide related_name for groups and user_permissions fields
customUser.groups.field.related_name = 'customuser_groups'
customUser.user_permissions.field.related_name = 'customuser_permissions'