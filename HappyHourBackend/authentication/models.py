from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    email = models.EmailField(max_length=200,unique=True)
    password = models.CharField(max_length=100)
    is_verified = models.BooleanField(default=False)
    # USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['email']
