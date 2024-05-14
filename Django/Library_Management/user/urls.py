from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('account.html/', views.account, name='account'),
    path('log-in.html/', views.log_in, name='log-in'),
    path('sign-in.html/', views.sign_in, name='sign-in'),
    path('update-profile.html/', views.update_profile, name='update-profile'),
]