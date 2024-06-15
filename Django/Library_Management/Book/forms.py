from django import forms
from .models import Book

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'author', 'publisher', 'category', 'isbn', 'pages', 'edition', 'rating', 'about', 'summary', 'cover', 'status']