from tabnanny import verbose
from django.db import models

# Create your models here.

class Event(models.Model):
    eventTitle= models.CharField(verbose_name= 'Event Title', max_length=100)

    EVENT_FREQ_PER_MONTH = [
        (0, 'One-off Event')
        (1, 'Monthly')
        (2, 'Every Other Week')
        (4, 'Weekly')   
    ]
    frequency= models.PositiveSmallIntegerField(verbose_name='Event Frequency', choices=EVENT_FREQ_PER_MONTH, default= 4)
    #need to add dependent Day/Date field for Frequency
  
    active= models.BooleanField(verbose_name='Active', default= True)
    #need to add dependent verification level


    TYPE_CHOICES = [
        ('HH', 'Happy Hour')
        ('SP', 'Student Special')
        ('HS', 'Holiday Special')
    ]
    type= models.CharField(verbose_name='Event Type', choices= TYPE_CHOICES)
    #need to add price range

    description= models.TextField(verbose_name='Event Description', max_length=2000)

    photos= models.ImageField()
    

# class Location(models.Model):
#     locationName
#     email= models.CharField(max_length=200)