from django import forms
from django.contrib.auth.hashers import make_password
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import UserCreationForm
from .models import customUser
from django.contrib.auth import authenticate

class SignUpForm(UserCreationForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm Password', widget=forms.PasswordInput)

    class Meta:
        model = customUser
        fields = ['email', 'username', 'password1', 'password2']

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if customUser.objects.filter(email=email).exists():
            raise forms.ValidationError("This email address is already in use.")
        return email

    def clean_username(self):
        username = self.cleaned_data.get('username')
        if customUser.objects.filter(username=username).exists():
            raise forms.ValidationError("This username is already taken.")
        return username

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords do not match.")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.password = make_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user



class UpdateProfileForm(forms.Form):

    new_username = forms.CharField(max_length=150, required=False)
    old_password = forms.CharField(widget=forms.PasswordInput, required=False)
    new_password = forms.CharField(widget=forms.PasswordInput, required=False)
    confirm_new_password = forms.CharField(widget=forms.PasswordInput, required=False)
    pic = forms.ImageField(required=False)

    class Meta:
        model = customUser
        fields = ['new_username', 'old_password', 'new_password', 'confirm_new_password', 'pic']

    def clean_new_username(self):
        new_username = self.cleaned_data.get('new_username')
        
        if new_username:
            existing_user = customUser.objects.filter(username=new_username).exists()
            if existing_user:
                raise forms.ValidationError('Username already exists. Please choose a different one.')

        return new_username
    
    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        super().__init__(*args, **kwargs)

    def clean(self):
        cleaned_data = super().clean()
        new_password = cleaned_data.get('new_password')
        confirm_new_password = cleaned_data.get('confirm_new_password')
        old_password = cleaned_data.get('old_password')

        if new_password and confirm_new_password:
            if not old_password:
                raise forms.ValidationError('Please enter your old password to change it.')

            # Authenticate user with old password
            user = authenticate(username=self.user.username, password=old_password)
            if not user:
                raise forms.ValidationError('Incorrect old password.')

            if new_password != confirm_new_password:
                raise forms.ValidationError('Passwords do not match.')

        return cleaned_data  
