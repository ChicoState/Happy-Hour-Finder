from django.forms import ModelForm
from django import forms
from .models import Event, Location


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        exclude = ['active']


