from django.shortcuts import render
# from .forms import ContactForm
from Events.models import Event, Location
from django.core.paginator import Paginator
from django.db.models import Q
from django.views.generic import ListView
# Create your views here.

def home_view(request):
    locationData = []
    location = Location.objects.all()
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