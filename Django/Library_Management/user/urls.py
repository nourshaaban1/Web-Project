from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [ 
    path('account.html/', views.account, name='account'),
    path('log-in.html/', views.log_in, name='log-in'),
    path('sign-in.html/', views.sign_in, name='sign-in'),
    path('update-profile.html/', views.update_profile, name='update-profile'),
    path('logout/', views.logout_user, name='logout'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)