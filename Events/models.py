from tabnanny import verbose
from django.db import models

# Create your models here.

class Location(models.Model):
    locationName= models.CharField(verbose_name='Business or Location Name', max_length=100, null= False)
    listing= models.URLField(verbose_name='Google Maps Listing', null= False)
    website= models.URLField(verbose_name='Business or Location Website', null= True)

    def __str__(self):
        return '{}'.format(self.locationName)

class Event(models.Model):

    location= models.ForeignKey(Location, on_delete= models.CASCADE, null= False)

    eventTitle= models.CharField(verbose_name= 'Event Title', max_length=100, null= False)

    EVENT_FREQ_PER_MONTH = [
        #(0, 'One-off Event'),
        #(1, 'Monthly'),
        #(2, 'Every Other Week'),
        (4, 'Weekly')   
    ]
    frequency= models.PositiveSmallIntegerField(verbose_name='Event Frequency', choices=EVENT_FREQ_PER_MONTH, default= 4)
    
    DAY_OF_WEEK = [
        ('MO', 'Monday'),
        ('TU', 'Tuesday'),
        ('WE', 'Wednesday'),
        ('TH', 'Thursday'),
        ('FR', 'Friday'),
        ('SA', 'Saturday'),
        ('SU', 'Sunday')   
    ]
    dayOfWeek= models.CharField(verbose_name='Day of Week', choices=DAY_OF_WEEK, max_length=10, null= False)
  
    active= models.BooleanField(verbose_name='Active', default= True)
    #need to add dependent verification level


    TYPE_CHOICES = [
        ('HH', 'Happy Hour'),
        ('SP', 'Student Special'),
        ('OT', 'Other'),
        #('HS', 'Holiday Special')
    ]
    type= models.CharField(verbose_name='Event Type', choices= TYPE_CHOICES, max_length=100, default= 'HH', null= True)
    #need to add price range

    description= models.TextField(verbose_name='Event Description', max_length=2000, null= True)

    time = models.CharField(verbose_name= 'Start and End time',  max_length=100, null= False)

    # photos= models.ImageField()

    def __str__(self):
        return '{}'.format(self.eventTitle)
    


    