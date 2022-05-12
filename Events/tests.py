from django.test import TestCase
# from django.test import Client
# from django.contrib.auth.models import User
from django.contrib.admin.sites import AdminSite
from django.contrib.admin.options import ModelAdmin
from Events.models import Event, Location, Fav
# from Events.views import submitEvent
# from Events.forms import EventForm
# from Events.admin import EventAdmin

# Create your tests here.

class EventTestCase(TestCase):

    def setUp(self):
        testLocation = Location.objects.create(locationName = 'Tacklebox', listing = 'www.google.com')
        self.testEvent = Event.objects.create(eventTitle = 'Happy Hour Test', location = testLocation,
            frequency = 4, dayOfWeek = 'MO', active = True, type = 'HH', time = 'always')

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

# class EventFavTesting(TestCase):
#     def setUp(cls):
#         testUser = User.objects.create_user('testUser', 'testUser@test.com', 'password')
#         testLocation = Location.objects.create(locationName = 'Joe\'s', listing = 'www.google.com')
#         cls.testFav = Fav.objects.create(user = testUser, location = testLocation)
#         cls.tUser = User.objects.create_user('tUser', 'tUser@test.com', 'password')
#         cls.tLocation = Location.objects.create(locationName = 'Joe\'s', listing = 'www.google.com')
#
#
#     def test_favoriteEvent(self):
#         self.assertEqual(self.testFav.user, self.tUser)
#         self.assertEqual(self.testFav.location, self.tLocation)


class EventAdminTesting(TestCase):
    @classmethod
    def setUpTestData(cls):
        testLocation = Location.objects.create(locationName = 'Tacklebox', listing = 'www.google.com')
        cls.testEvent = Event.objects.create(eventTitle = 'Happy Hour Test', location = testLocation,
            frequency = 4, dayOfWeek = 'MO', active = True, type = 'HH', time = 'always')

    def setUp(self):
        self.site = AdminSite()

    def test_admin_str(self):
        testMA = ModelAdmin(self.testEvent, self.site)
        self.assertEqual(str(testMA), "Events.ModelAdmin")

    def test_admin_default_attr(self):
        testMA = ModelAdmin(self.testEvent, self.site)
        self.assertEqual(testMA.actions, [])
        self.assertEqual(testMA.list_filter, ())
        self.assertEqual(testMA.list_display, ('__str__', ))
