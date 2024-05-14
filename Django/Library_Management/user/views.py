from django.shortcuts import render

# Create your views here.
def account(request):
    return render(request, 'account.html')

def log_in(request):
    return render(request, 'log-in.html')

def sign_in(request):
    return render(request, 'sign-in.html')

def update_profile(request):
    return render(request, 'update-profile.html')