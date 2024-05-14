from django.shortcuts import render
from django.shortcuts import render, redirect 
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm 
from django.contrib.auth import login, logout
from django.contrib import messages
from .models import User

# Create your views here.
def account(request):
    return render(request, 'account.html')

def log_in(request):
    if request.method == "POST": 
        form = AuthenticationForm(data=request.POST)
        if form.is_valid(): 
            login(request, form.get_user())
            if 'next' in request.POST:
                return redirect(request.POST.get('next'))
            else:
                return redirect("home")
    else: 
        form = AuthenticationForm()
    return render(request, "log-in.html", { "form": form })

def sign_in(request):
    if request.method == "POST": 
        form = UserCreationForm(request.POST) 
        if form.is_valid(): 
            login(request, form.save())
            return redirect("home")
    else:
        form = UserCreationForm()
    return render(request, "sign-in.html", { "form": form })

def update_profile(request):
    return render(request, 'update-profile.html')