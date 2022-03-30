from django.shortcuts import render
from .forms import ContactForm
from .models import Event, Location
# Create your views here.
def home_view(request):
    array = Location.objects.all()
    print(array)
    if request.method == 'POST':
        form = ContactForm(request.POST)
        print('gwg')
        if form.is_valid():
            print("yayo")
            form.save()
            return render(request, "index.html", {'messages': "success"})
    context = {
        "location": array
        }
    return render(request, "index.html",context)