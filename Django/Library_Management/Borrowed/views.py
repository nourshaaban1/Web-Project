from django.shortcuts import render

# Create your views here.

def Borrowed_books(request):
    return render(request, 'Borrowed-books.html')