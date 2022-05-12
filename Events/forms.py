# from django.forms import ModelForm
from django import forms
from .models import Event

# Create Event form excluding only 'active' field, defaulting to FALSE (inactive)
class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        exclude = ['active']
