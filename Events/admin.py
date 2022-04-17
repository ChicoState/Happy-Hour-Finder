from multiprocessing import Event
from django.contrib import admin
from .models import *

# Register your models here.

class LocationInline(admin.StackedInline):
    model = Location

class EventAdmin(admin.ModelAdmin):
    # inlines = [
    #     LocationInline,
    # ]
    list_filter = ('dayOfWeek', 'active','location__locationName')
    list_display = ('eventTitle','dayOfWeek','type','active')
    

admin.site.register(Event, EventAdmin)
admin.site.register(Location)