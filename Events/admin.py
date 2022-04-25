from multiprocessing import Event
from django.contrib import admin
from .models import *

# Register your models here.

class LocationInline(admin.StackedInline):
    model = Location


class EventAdmin(admin.ModelAdmin):
    list_filter = ('dayOfWeek', 'active','location__locationName')
    list_display = ('eventTitle','dayOfWeek','type','active')

    actions = ['make_active', 'make_inactive']

    @admin.action(description='Mark selected Events as Active')
    def make_active(self, request, queryset):
        queryset.update(active= True)

    @admin.action(description='Mark selected Events as Inactive')
    def make_inactive(self, request, queryset):
        queryset.update(active= False)



admin.site.register(Event, EventAdmin)
admin.site.register(Location)