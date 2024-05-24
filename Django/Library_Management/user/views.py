from django.shortcuts import render, redirect 
from django.contrib.auth.forms import  AuthenticationForm 
from django.contrib.auth import login
from .forms import SignUpForm

# Create your views here.
def account(request):
    return render(request, 'account.html')

def log_in(request):
    # if request.method == "POST": 
    #     form = AuthenticationForm(data=request.POST)
    #     if form.is_valid(): 
    #         login(request, form.get_user())
    #         if 'next' in request.POST:
    #             return redirect(request.POST.get('next'))
    #         else:
    #             return redirect("home")
    # else: 
    #     form = AuthenticationForm()
    return render(request, "log-in.html")

def sign_in(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        print(form) 
        if form.is_valid():
            # Save the form data to create a new User object
            user = form.save(commit=False)
            # Additional processing if needed
            user.save()
            return redirect('log-in')  # Redirect to login page or any other page after successful sign-in
        print(form)  
    else:
        form = SignUpForm()
    
    return render(request, 'sign-in.html', {'form': form})

def update_profile(request):
    return render(request, 'update-profile.html')