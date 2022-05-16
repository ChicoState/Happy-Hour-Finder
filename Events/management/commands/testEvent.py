from selenium import webdriver
from django.core.management.base import BaseCommand, CommandError

from selenium.webdriver.common.action_chains import ActionChains
from webdriver_manager.chrome import ChromeDriverManager
import time
class Command(BaseCommand):
    #must be logged in to run test script
    def handle(self,*args,**options):
        url = "https://happyhourlanding.herokuapp.com/event/post"
        options = webdriver.ChromeOptions()
        options.add_argument('--ignore-certificate-errors')
        options.add_argument('--incognito')
        options.add_argument('--headless')
        # driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver", chrome_options=options)
        driver = webdriver.Chrome(ChromeDriverManager().install())
        driver.get(url)
        time.sleep(5)
        eventTitle = driver.find_elements_by_id("id_eventTitle")
        field = eventTitle[0]
        eventTitle.send_keys("Sample Event")
        

        
