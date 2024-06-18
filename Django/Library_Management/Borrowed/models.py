from django.db import models
from user.models import customUser
from Book.models import Book

# Create your models here.
class Borrowing(models.Model):
    borrow_id = models.AutoField(primary_key=True)
    borrow_date = models.DateField()
    return_date = models.DateField()
    borrower = models.ForeignKey(customUser, on_delete=models.CASCADE, related_name='borrowings')
    borrowed_book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='borrowings')

    def __str__(self):
        return f"{self.borrower.username} borrowed {self.borrowed_book.title}"