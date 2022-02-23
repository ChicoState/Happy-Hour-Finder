from django.shortcuts import render
from .forms import ContactForm
# Create your views here.
def home_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        print('gwg')
        if form.is_valid():
            print("yayo")
            form.save()
    context = {}
    return render(request, "index.html",context)