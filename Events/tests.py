from django.test import TestCase
from django.test import Client
from Events.models import Event, Location
# Create your tests here.

class EventTestCase(TestCase):

    def setUp(cls):
        testLocation = Location.objects.create(locationName = 'Tacklebox', listing = 'www.google.com')
        cls.testEvent = Event.objects.create(eventTitle = 'Happy Hour Test', location = testLocation, frequency = 4,
            dayOfWeek = 'MO', active = True, type = 'HH', time = 'always')

    def test_testEvent_day_of_week(self):
       self.assertEqual(self.testEvent.dayOfWeek, 'MO')

    def test_testEvent_location_name(self):
       self.assertEqual(self.testEvent.location.locationName, 'Tacklebox')

    def test_testEvent_location_listing(self):
        self.assertEqual(self.testEvent.location.listing, 'www.google.com')

    def test_location_name(self):
        location = Location.objects.get(id=1)
        field_label = location._meta.get_field('locationName').verbose_name
        self.assertEqual(field_label, 'Business or Location Name')

    def test_location_address_blank(self):
        location = Location.objects.get(id=1)
        field_label = location._meta.get_field('address').blank
        self.assertTrue(field_label)

    def test_event_title(self):
        event = Event.objects.get(id=1)
        field_label = event._meta.get_field('eventTitle').verbose_name
        self.assertEqual(field_label, 'Event Title')

    def test_event_title_max_length(self):
        event = Event.objects.get(id=1)
        field_label = event._meta.get_field('eventTitle').max_length
        self.assertEqual(field_label, 100)

    def test_active_default(self):
        event = Event.objects.get(id=1)
        field_label = event._meta.get_field('active').default
        self.assertFalse(field_label)
