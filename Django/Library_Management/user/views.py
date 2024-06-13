from django.shortcuts import render, redirect
from .forms import SignUpForm
from .models import customUser
from django.contrib.auth import logout as django_logout
from django.contrib.auth import login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required

def account(request):
    return render(request, 'account.html')

def log_in(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            login(request, form.get_user())     
            return redirect("/")
    else:
        form = SignUpForm()
    return render(request, 'log-in.html', {'form':form})

def sign_in(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('log-in')
    else:
        form = SignUpForm()
    return render(request, 'sign-in.html', {'form': form})

@login_required
def update_profile(request):
    return render(request, 'update-profile.html')

@login_required
def logout_user(request):
    django_logout(request)
    return redirect('log-in') 
