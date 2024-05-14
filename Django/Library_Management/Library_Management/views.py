# views.py
from django.shortcuts import render

def about(request):
    return render(request, 'about.html')

def category(request):
    return render(request, 'category.html')

def home(request):
    return render(request, 'home.html')