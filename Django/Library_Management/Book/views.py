from django.shortcuts import render, redirect
from .models import Book
from .forms import BookForm 
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from Borrowed.models import Borrowing
from Book.models import Book
from datetime import timedelta
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.db.models import Q
from django.core import serializers



def all_books(request):
    available_books = Book.objects.filter(status='Available')
    unavailable_books = Book.objects.filter(status='Unavailable')
    return render(request, 'all-books.html', {
        'available_books': available_books,
        'unavailable_books': unavailable_books,
        'books': available_books | unavailable_books,  # For the combined "All Books" section
    })

def book_page(request, isbn):
    book = get_object_or_404(Book, isbn=isbn)
    return render(request, 'book-page.html', {'book': book})

def book_table(request):
    books = Book.objects.all()
    return render(request, 'book-table.html', {'books': books})

def edit_book(request, isbn):
    book = get_object_or_404(Book, isbn=isbn)
    
    if request.method == 'POST':
        form = BookForm(request.POST, instance=book)
        if form.is_valid():
            form.save()
            return redirect('book-table')  # Redirect to book table or other appropriate page
    else:
        form = BookForm(instance=book)
    
    return render(request, 'edit-book.html', {'form': form, 'book': book})

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
                status=form.cleaned_data['status'],
            )
            new_book.save()  # Save the new book object
            return redirect('all-books')  # Redirect to all-books page after successful upload
    else:
        form = BookForm()  # Create an empty form instance for GET request

    return render(request, 'upload-book.html', {'form': form})


def delete_book(request, isbn):
    if request.method == 'POST':
        try:
            book = get_object_or_404(Book, isbn=isbn)
            book.delete()
            return JsonResponse({'message': 'Book deleted successfully.'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method.'}, status=405)


@login_required
def borrow_book(request, isbn):
    book = get_object_or_404(Book, isbn=isbn)
    return_date = timezone.now() + timedelta(days=30)
    borrowing = Borrowing.objects.create(
        borrower=request.user,
        borrowed_book=book,
        borrow_date=timezone.now(),
        return_date=return_date
    )
    borrowing.save()
    return redirect('Borrowed-books')


def search_view(request):
    search_query = request.GET.get('search_query', '')
    search_type = request.GET.get('search_type', 'Everything')
    
    if search_type == 'Everything':
        results = Book.objects.filter(
            Q(title__icontains=search_query) |
            Q(category__icontains=search_query) |
            Q(author__icontains=search_query)
        )
    elif search_type == 'by Title':
        results = Book.objects.filter(title__icontains=search_query)
    elif search_type == 'by Category':
        results = Book.objects.filter(category__icontains=search_query)
    elif search_type == 'by Author':
        results = Book.objects.filter(author__icontains=search_query)
    else:
        results = Book.objects.none()  # Handle unknown search types
    
    # Serialize results with all fields
    serialized_results = serializers.serialize('json', results)
    
    return JsonResponse({'results': serialized_results}, safe=False)