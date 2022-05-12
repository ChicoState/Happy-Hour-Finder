from smoketest import SmokeTest
from Events.models import Event

class DemoTest(SmokeTest):
    def test_Eventmodel(self):
        cnt = Event.objects.all().count()
        self.assertTrue(cnt > 0 )
