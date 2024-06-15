from django.db import models

# Create your models here.
class Book(models.Model):
    STATUS_CHOICES = [
        ('Available', 'Available'),
        ('Unavailable', 'Unavailable'),
    ]


    book_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    publisher = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    isbn = models.CharField(max_length=25)
    pages = models.IntegerField(null=True, blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    edition = models.CharField(max_length=50, null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    summary = models.TextField(null=True, blank=True)
    cover = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='Available')
    
    def __str__(self):
        return self.title