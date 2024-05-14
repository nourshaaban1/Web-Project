# views.py
from django.shortcuts import render

def about(request):
    return render(request, 'about.html')

def account(request):
    return render(request, 'account.html')

def all_books(request):
    return render(request, 'all-books.html')

def book_page(request):
    return render(request, 'book-page.html')

def book_table(request):
    return render(request, 'book-table.html')

def category(request):
    return render(request, 'category.html')

def edit_book(request):
    return render(request, 'edit-book.html')

def home(request):
    return render(request, 'home.html')

def log_in(request):
    return render(request, 'log-in.html')

def sign_in(request):
    return render(request, 'sign-in.html')

def update_profile(request):
    return render(request, 'update-profile.html')

def upload_book(request):
    return render(request, 'upload-book.html')
