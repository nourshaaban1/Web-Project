from django.shortcuts import render, redirect
from .forms import SignUpForm
from .forms import UpdateProfileForm
from .models import customUser
from django.contrib import messages
from django.contrib.auth import logout as django_logout
from django.contrib.auth import login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash
from Borrowed.models import Borrowing

def account(request):
    if request.user.is_authenticated:
        borrowings_count = Borrowing.objects.filter(borrower=request.user).count()
    else:
        borrowings_count = 0

    return render(request, 'account.html', {'borrowings_count': borrowings_count})

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
def logout_user(request):
    django_logout(request)
    return redirect('log-in') 


@login_required
def update_profile(request):
    if request.method == 'POST':
        form = UpdateProfileForm(request.POST, request.FILES, user=request.user)
        if form.is_valid():
            new_username = form.cleaned_data.get('new_username')
            old_password = form.cleaned_data.get('old_password')
            new_password = form.cleaned_data.get('new_password')
            confirm_new_password = form.cleaned_data.get('confirm_new_password')
            profile_picture = form.cleaned_data.get('pic')

            # Update username if provided and check for uniqueness
            if new_username and new_username != request.user.username:
                if customUser.objects.filter(username=new_username).exists():
                    messages.error(request, 'Username already exists. Please choose a different one.')
                else:
                    request.user.username = new_username
                    request.user.save()
                    messages.success(request, 'Username updated successfully.')

            # Update password if old password and new password fields are provided
            if old_password and new_password and confirm_new_password:
                if request.user.check_password(old_password):
                    if new_password == confirm_new_password:
                        request.user.set_password(new_password)
                        request.user.save()
                        update_session_auth_hash(request, request.user)  # Important!
                        messages.success(request, 'Password updated successfully.')
                    else:
                        messages.error(request, 'New passwords do not match.')
                else:
                    messages.error(request, 'Incorrect old password.')

            # Update profile picture if provided
            if profile_picture:
                request.user.pic = profile_picture
                request.user.save()
                messages.success(request, 'Profile picture updated successfully.')

            return redirect('account')  # Redirect to account page after form submission
    else:
        form = UpdateProfileForm(user=request.user)  # Populate form with current user instance

    return render(request, 'update-profile.html', {'form': form})