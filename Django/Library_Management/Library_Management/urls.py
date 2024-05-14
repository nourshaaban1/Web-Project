"""
URL configuration for Library_Management project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('About.html/', views.about, name='about'),
    path('account.html/', views.account, name='account'),
    path('all-books.html/', views.all_books, name='all-books'),
    path('book-page.html/', views.book_page, name='book-page'),
    path('book-table.html/', views.book_table, name='book-table'),
    path('category.html/', views.category, name='category'),
    path('edit-book.html/', views.edit_book, name='edit-book'),
    path('', views.home, name='home'),
    path('log-in.html/', views.log_in, name='log-in'),
    path('sign-in.html/', views.sign_in, name='sign-in'),
    path('update-profile.html/', views.update_profile, name='update-profile'),
    path('upload-book.html/', views.upload_book, name='upload-book'),
]
