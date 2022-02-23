from django.db import models

# Create your models here.
class phoneSignup(models.Model): 
    phoneNumber = models.CharField(max_length=12)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.phoneNumber