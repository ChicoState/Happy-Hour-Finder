from django.shortcuts import render
# from .forms import ContactForm
from Events.models import Event, Location
from django.core.paginator import Paginator
# Create your views here.

def home_view(request):
    array = Location.objects.all()
    paginator = Paginator(array, 9)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    context = {
        "location": page_obj
        }
    return render(request, "index.html",context)