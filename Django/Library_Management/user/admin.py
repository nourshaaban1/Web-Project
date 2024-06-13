from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import customUser
from .forms import SignUpForm

class CustomUserAdmin(UserAdmin):
    add_form = SignUpForm
    model = customUser
    list_display = ['username', 'email', 'is_staff', 'is_active']

admin.site.register(customUser, CustomUserAdmin)
