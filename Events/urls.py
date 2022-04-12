from django.urls import path

from . import views
urlpatterns = [
    path('post', views.submitEvent, name='submitEvent'),
    
]