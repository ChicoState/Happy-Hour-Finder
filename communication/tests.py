from asyncio.windows_events import NULL
from django.test import TestCase
from django.test import TestCase
from django.test import Client
from Events.models import Event, Location, Fav
from Events.views import submitEvent
from Events.forms import EventForm
from Events.admin import EventAdmin
from django.contrib.auth.models import User
from django.contrib.admin.sites import AdminSite
from django.contrib.admin.options import ModelAdmin
import random

# Create your tests here.
class RandomEventTest(TestCase):
    # print(hihihihi)
    def setUp(cls):
        testLocation = Location.objects.create(locationName = 'Tacklebox', listing = 'www.google.com')

    def test_random(self):
        location = Location.objects.filter()
        # field_label = location._meta.get_field('LocationNames').verbose_name
        self.assertEqual(random.choice(location).locationName, 'Tacklebox')

    def test_listing(self):
        listings=Location.objects.filter()
        self.assertEqual(random.choice(listings).listing, 'www.google.com')

    def test_randomNumber(self):
        randomName = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"]
        self.assertNotEqual(random.choice(randomName), random.choice(randomName))
 
