from django.shortcuts import render
from django.http import HttpResponse
from .models import Event, Location
from django.contrib.auth.decorators import login_required
from .forms import EventForm

# Create your views here.

@login_required(login_url="/user/login/")
def submitEvent(request):
        form = EventForm(request.POST)
        if form.is_valid():
            form.save()
        return render(request, 'new_event.html', {'form': form} )


# def get_events(request):

#     #retrieve all objects
#     allLocations = Location.objects.order_by('-locationName')
#     eventList=[]
#     for x in allLocations:
#         eventList.append(Event.objects.filter(location = x, active = True).order_by('-dayOfWeek'))
#     return HttpResponse(eventList)



def get_events(request):

    #retrieve all objects
    allLocations = Location.objects.order_by('-locationName')
    eventList=[]
    for x in allLocations:
        eventList.append(Event.objects.filter(location = x, active = True).order_by('-dayOfWeek'))
    return render(request, 'all_events.html', {'list': eventList} )