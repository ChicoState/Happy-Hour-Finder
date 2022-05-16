from pyexpat import model
import random
from django.shortcuts import render
# from .forms import ContactForm
from Events.models import Event, Location, Fav
from django.core.paginator import Paginator
from django.db.models import Q
from django.views.generic import ListView, DetailView
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
# Create your views here.

@csrf_exempt
def home_view(request):
    if (request.method == "POST"):
        userId = request.user
        # print(request.POST["locationPk"])
        name = request.POST["locationPk"]
        favLocation = Location.objects.filter(locationName=name)
        print(favLocation," ",userId)
        Fav.objects.create(user=userId, location=favLocation[0])
        print("posted")
    locationData = []
    location = Location.objects.distinct().filter(event__active = True)
    for local in location:
        events = Event.objects.filter(location = local, active = True).order_by('-dayOfWeek')
        data = {
            "location": local,
            "events": events
        }
        locationData.append(data)

    # paginator = Paginator(array, 50)
    # page_number = request.GET.get('page')
    # page_obj = paginator.get_page(page_number)
    # allLocations = Location.objects.order_by('-locationName')
    # eventList=[]
    # for x in allLocations:
    #     eventList.append(Event.objects.filter(location = x, active = True).order_by('-dayOfWeek'))
    # print(eventList)
    
    context = {
      "locationData" : locationData
}
    return render(request, "index.html",context)

@login_required(login_url='user/login')
def favs_view(request):
    location = Fav.objects.filter(user=request.user)
    locationData = []
    for local in location:
    # location = Fav.objects.all()
        events = Event.objects.filter(location = local.location, active = True).order_by('-dayOfWeek')
        data = {
            "location": local.location,
            "events": events
        }
        locationData.append(data)
    context = {
        "locationData" : locationData
    }
    print(locationData)
    return render(request, "myfavs.html",context)

class SearchResultsView(ListView):
    model =  Location
    template_name = "search.html"
    def get_queryset(self):  # new
        query = self.request.GET.get("q")
        
        # if not query:
        #     object_list = ""
        #     return object_list
        object_list = Location.objects.filter(
        Q(locationName__icontains=query) 
        # | Q(address__icontains=query)
    )
        print(object_list)
        
        return object_list


def RandomEventView(request):
    # model = Location
    # # template_name = "RandomEvent.html"
    # print("eent data",list(Event.objects.all()))
    # context = {
    #     "event" : Location.objects.all()
    # }
    # def get_rEvent(self):
    #     query = self.request.GET.get("q")

    #     items = list(Event.objects.all())
    #     rEvent = Event.choice(items)    

    #     return rEvent
    template_name = "RandomEvent.html"
    # return render(request,'RandomEvent.html',context)
    # template_name = "RandomEvent.html"
    model= Location
    # def get_queryset(self, *args, **kwargs):
    #     qs = super(RandomEventView, self).get_queryset(*args, **kwargs)
    #     # qs = qs.order_by("-id")
    #     # change 3 to how many random items you want
    #     random_items = random.sample(qs, 1)
    #     # if you want only a single random item
    #     random_item = random.choice(qs)
    #     return qs   
    # def get_rEvent(self):  # new
    query = request.GET.get("q")
    
    # if not query:
    #     object_list = ""
    #     return object_list
    object_list = Location.objects.distinct().filter(event__active = True)

    random_item = random.choice(object_list)

    events = Event.objects.filter(location = random_item, active = True).order_by('-dayOfWeek')
    data = {
        "location": random_item,
        "events": events
    }

    print("inside event\n\n\n")
    print(events)

    return render(request, template_name, {'random_item': data})
    
