from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .models import Borrowing
from Book.models import Book
from datetime import timedelta

# Create your views here.

def Borrowed_books(request):
    borrowings = Borrowing.objects.filter(borrower=request.user)
    return render(request, 'Borrowed-books.html', {'borrowings': borrowings})

def book_page1(request, isbn):
    book = get_object_or_404(Book, isbn=isbn)
    return render(request, 'book-page1.html', {'book': book})