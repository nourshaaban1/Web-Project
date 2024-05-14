from django.shortcuts import render
from .models import Book

def all_books(request):
    all_books = Book.objects.all()
    return render(request, 'Book\all-book.html', {'books' : Book})

