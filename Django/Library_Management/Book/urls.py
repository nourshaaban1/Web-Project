from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('all-books.html/', views.all_books, name='all-books'),
    path('book-page/<str:isbn>/', views.book_page, name='book-page'),
    path('book-table/', views.book_table, name='book-table'),
    path('edit-book.html/<str:isbn>/', views.edit_book, name='edit-book'),
    path('upload-book.html/', views.upload_book, name='upload-book'),
    path('borrow/<str:isbn>/', views.borrow_book, name='borrow_book'),
    path('search/', views.search_view, name='search'),
]