from django.shortcuts import render, redirect
from .models import Book
from .forms import BookForm 



def all_books(request):
    books = Book.objects.all()  # Query to get all books
    return render(request, 'all-books.html', {'books': books})

def book_page(request):
    return render(request, 'book-page.html')

def book_table(request):
    return render(request, 'book-table.html')

def edit_book(request):
    return render(request, 'edit-book.html')

def upload_book(request):
    if request.method == 'POST':
        form = BookForm(request.POST)
        if form.is_valid():
            # Create a new Book object with form data
            new_book = Book(
                title=form.cleaned_data['title'],
                author=form.cleaned_data['author'],
                publisher=form.cleaned_data['publisher'],
                category=form.cleaned_data['category'],
                isbn=form.cleaned_data['isbn'],
                pages=form.cleaned_data['pages'],
                rating=form.cleaned_data['rating'],
                edition=form.cleaned_data['edition'],
                about=form.cleaned_data['about'],
                summary=form.cleaned_data['summary'],
                cover=form.cleaned_data['cover'],
                status='Available'  # Set initial status
            )
            new_book.save()  # Save the new book object
            return redirect('all-books')  # Redirect to all-books page after successful upload
    else:
        form = BookForm()  # Create an empty form instance for GET request

    return render(request, 'upload-book.html', {'form': form})
