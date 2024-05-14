from django.shortcuts import render
from .models import Book
<<<<<<< HEAD

def all_books(request):
    all_books = Book.objects.all()
    return render(request, 'Book\all-book.html', {'books' : Book})

def all_books(request):
    return render(request, 'all-books.html')

def book_page(request):
    return render(request, 'book-page.html')

def book_table(request):
    return render(request, 'book-table.html')

def edit_book(request):
    return render(request, 'edit-book.html')

def upload_book(request):
    return render(request, 'upload-book.html')
=======

def all_books(request):
    all_books = Book.objects.all()
    return render(request, 'Book\all-book.html', {'books' : Book})

>>>>>>> 72560ffb8122dbab982246d6d745c8af42bc0a8a
