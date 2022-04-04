from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(phoneSignup)

class LocationInline(admin.StackedInline):
    model = Location

class EventAdmin(admin.ModelAdmin):
    inlines = [
        LocationInline,
    ]

admin.site.register(Event)
admin.site.register(Location)