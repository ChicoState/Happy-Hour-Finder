from django.shortcuts import render
from django.http import HttpResponse
from .models import Event, Location
from django.contrib.auth.decorators import login_required
from .forms import EventForm

# Create your views here.

# @login_required(login_url="/accounts/login/")
def submitEvent(request):
        form = EventForm(request.POST)
        if form.is_valid():
            form.save()
        return render(request, 'new_event.html', {'form': form} )

