from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('all-books.html/', views.all_books, name='all-books'),
    path('book-page.html/', views.book_page, name='book-page'),
    path('book-table.html/', views.book_table, name='book-table'),
    path('edit-book.html/', views.edit_book, name='edit-book'),
    path('upload-book.html/', views.upload_book, name='upload-book'),
]