from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.home_view, name='home'),
    path('favs', views.favs_view, name='favs'),
    path('search', views.SearchResultsView.as_view(), name='search'),
    path('RandomEvent', views.RandomEventView, name='RandomEvent' )
]