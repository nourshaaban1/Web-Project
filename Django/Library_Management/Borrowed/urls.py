from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [ 
    path('Borrowed-books.html/', views.Borrowed_books, name='Borrowed-books'),
    path('book/<str:isbn>/', views.book_page1, name='book-page1'),
]


