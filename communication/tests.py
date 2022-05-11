from django.test import TestCase
from django.test import Client
from http import HTTPStatus
from Events import forms

# Create your tests here.
class AddEventFormTests(TestCase):
    # def test_title_happy(self):
        # self.client.login(username='admin', password='admin')
        # response = self.client.get("/event/post")
        # self.assertEqual(response.status_code, HTTPStatus.OK)
        # self.assertContains(response, "<h2>Share a New Event!</h2>", html=True)

    def test_login_redirect(self):
        response = self.client.get('/event/post', follow=True)
        self.assertRedirects(response, '/user/login/?next=/event/post')
        response = self.client.post('/event/post', follow=True)
        self.assertRedirects(response, '/user/login/?next=/event/post')

    # def test_call_view_load(self):
    #     self.client.post('/user/login/', {'Username': 'admin', 'Password': 'admin'})
    #     # self.client.login(username='admin', password='admin')
    #     response = self.client.get('/event/post', follow=True)
    #     self.assertEqual(response.status_code, 200)
    #     self.assertTemplateUsed(response, 'new_event.html')