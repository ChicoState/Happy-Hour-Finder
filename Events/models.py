# from tabnanny import verbose
from django.contrib.auth.models import User
from django.db import models
# from django.forms import ModelForm

# Location object, 1:M relation to Event object
class Location(models.Model):
    locationName= models.CharField(verbose_name='Business or Location Name', max_length=100, null= False)
    address = models.CharField(max_length=200, null= True, blank=True)
    picture = models.CharField(max_length=200, null= True, blank=True)
    listing= models.URLField(verbose_name='Google Maps Listing', null= False)
    website= models.URLField(verbose_name='Business or Location Website', null= True)
    LOCATION_TYPE_CHOICES = [
        ('O', 'Other'),
        ('R', 'Restaurant'),
        ('B', 'Bar')
    ]
    type= models.CharField(verbose_name= 'Type of Establishment', null= True, max_length= 10,
        choices= LOCATION_TYPE_CHOICES, default= 'B')

    def __str__(self):
        return '{}'.format(self.locationName)


# Event object conaining all information pertinent to an event
class Event(models.Model):

    location= models.ForeignKey(Location, on_delete= models.CASCADE, null= False )

    eventTitle= models.CharField(verbose_name= 'Event Title', max_length=100, null= False)

    EVENT_FREQ_PER_MONTH = [
        #(0, 'One-off Event'),
        #(1, 'Monthly'),
        #(2, 'Every Other Week'),
        (4, 'Weekly')
    ]
    frequency= models.PositiveSmallIntegerField(verbose_name='Event Frequency',
        choices=EVENT_FREQ_PER_MONTH, default= 4)
    
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

    active= models.BooleanField(verbose_name='Active', default= False)

    TYPE_CHOICES = [
        ('HH', 'Happy Hour'),
        ('SP', 'Student Special'),
        ('OT', 'Other'),
        #('HS', 'Holiday Special')
    ]
    type= models.CharField(verbose_name='Event Type', choices= TYPE_CHOICES, max_length=100,
        default= 'HH', null= True)

    description= models.TextField(verbose_name='Event Description', max_length=2000, null= True)

    time = models.CharField(verbose_name= 'Start and End time',  max_length=100, null= False)

    def __str__(self):
        return '{}'.format(self.eventTitle) + '{}'.format(self.location)

#  Feature for favoriting specific Events
class Fav(models.Model):
    user = models.ForeignKey(User, related_name="likeowner",on_delete=models.DO_NOTHING)
    location = models.ForeignKey(Location, related_name="favlocation",on_delete=models.DO_NOTHING)

#https://docs.djangoproject.com/en/4.0/topics/forms/modelforms/#django.forms.ModelForm
    