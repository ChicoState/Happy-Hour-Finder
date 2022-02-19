from selenium import webdriver
from django.core.management.base import BaseCommand, CommandError
from selenium.webdriver.common.action_chains import ActionChains
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from homes.models import Property, PropertyImage
import re
class Command(BaseCommand):
    
    def handle(self,*args,**options):
        import time
        propertiesList = []
        
        townsList = [
        "Tiburon"
        # ,
        # "Belvedere","Mill Valley","Corte Madera",
        # "Greenbrae","Kentfield","Ross","San Rafeal","San Anselmo", 
        # "Sausalito","Larkspur"
        ]
        def scrapeOrNot(prop):
            x = prop.split()
            if "Active" in x:
                return True
            else:
                return False
        def turnPriceToInt(string):
            string = string.replace(",","")
            string = string.replace("$","")
            integer = int(string)
            return integer
        def removeSpaces(string):
            return string.replace(" ", "")

        def save_function(propertiesList):
            print('starting')
            new_count = 0

            for prop in propertiesList:
                try:
                    propertyInstance = Property.objects.create(
                        town = prop['town'],
                        slug = prop['slug'],
                        address = prop['address'],
                        yearBuilt = prop['yearBuilt'],
                        mlsNumber = prop['mlsNumber'],
                        img = prop['img'],
                        price = prop['price'],
                        desc = prop['desc'],
                        bd = prop['bd'],
                        ba = prop['ba'],
                        lotSize = prop['lotSize'],
                        sqFt = prop['sqFt'],
                        companyListed = prop['companyListed']
                    )
                    for j in prop['imageList']:
                        print('this is what j is',j)
                        PropertyImage.objects.create(property = propertyInstance,
                        image = j)

                    new_count += 1
                except Exception as e:
                    print('failed at latest_article is none')
                    print(e)
                    break
            return print('finished')
        
        def scrapeProperties(list):
            Property.objects.all().delete()
            url = "https://rebareis.rapmls.com/scripts/mgrqispi.dll?APPNAME=ReBareis&PRGNAME=MLSLogin&ARGUMENT=H2zUOlu2tkUxkryesKDU76aIyylqh5MoRC%2FYnCgyNsE%3D&KeyRid=1&MLS_Origin=BARI&HM=Y"
            options = webdriver.ChromeOptions()
            options.add_argument('--ignore-certificate-errors')
            options.add_argument('--incognito')
            options.add_argument('--headless')
            # driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver", chrome_options=options)
            driver = webdriver.Chrome(ChromeDriverManager().install())

            for i in list:
                driver.get(url)
                time.sleep(3)
                cityField = driver.find_elements_by_id("City_Fill_In")
                field = cityField[0]
                towns = str(i)
                field.send_keys(towns)
                priceLowerBound = driver.find_elements_by_id("rapListingActualPriceInputFromField")
                priceLower = priceLowerBound[0]
                priceLower.send_keys("1200000")
                priceHigherBound = driver.find_elements_by_id("rapListingActualPriceInputThruField")
                priceHigher = priceHigherBound[0]
                priceHigher.send_keys("1400000")
                btn = driver.find_elements_by_id("rapBtnSubmitSearch")
                btn[0].click()
                time.sleep(3)
                html = driver.page_source
                soup = BeautifulSoup(html, features='html')
                property = soup.find_all(class_="row searchResult rapIDXSearchResultPage0")
                incrementor = 0
                for i in property:
                    status = i.find(class_='listingStatus').text
                    address = i.find(class_="address").text
                    
                    sluger = i.find(class_="address").text
                    slug = removeSpaces(sluger)
                    
                    imgSrc = i.find(class_="img-responsive primaryimg")
                    img = imgSrc['src']
                    if img == None:
                        img = ''
                    listingYrBuilt = i.find(class_="listing-info listingYrBuilt").text
                    if listingYrBuilt == None:
                        yearBuilt = ''
                    else:
                        yearBuilt = listingYrBuilt 
                    typeCheck = i.find(class_="listing-info listingSubtype")
                    if typeCheck == None:
                        type = ""
                    else:
                        type = typeCheck.text 
                    priceCheck = i.find(class_="rapIDXSearchResultsPriceTop")
                    if priceCheck == None:
                        price = ''
                    else: 
                        priceCheck = turnPriceToInt(priceCheck)
                        price = priceCheck.text
                    
                    descCheck = i.find("div",{"id":"rapIDXMarketingRemarksMobile"})
                    if descCheck == None:
                        desc = ''
                    else:
                        desc = descCheck.text
                    mlsNumberCheck = i.find(class_="listingNum")
                    if mlsNumberCheck == None:
                        mlsNumber = ''
                    else:
                        mlsNumber = mlsNumberCheck.text
                    bdCheck = i.find(class_="listing-info listingBeds")
                    if bdCheck == None:
                        bd = ''
                    else:
                        bd = bdCheck.text
                    baCheck = i.find(class_="listing-info listingBaths")
                    if baCheck == None:
                        ba = ''
                    else:
                        ba = baCheck.text
                    
                    lotSizeCheck = i.find(class_="listing-info listingLotz")
                    if lotSizeCheck == None:
                        lotSize = ''
                    else:
                        lotSize = lotSizeCheck.text
                    sqFtCheck = i.find(class_="listing-info listingSqFt")
                    if sqFtCheck == None:
                        sqFt = ''
                    else:
                        sqFt = sqFtCheck.text
                    companyListedCheck= i.find(class_="listingOfficeName")
                    
                    if companyListedCheck == None:
                        companyListed = ''
                    else:
                        companyListed = companyListedCheck.text
                    btn = driver.find_elements_by_class_name("listing-image")
                    btn[incrementor].click()
                    time.sleep(3)
                    html = driver.page_source
                    soup = BeautifulSoup(html, features='html')
                    propertyImages = soup.find_all(class_="rapListingImageCropped rapListingImage")
                    imageList = []
                    for x in propertyImages:
                        xx = x['style']
                        y = xx.replace("'","")
                        urls = re.findall('url\((.*?)\)',y)
                        text = urls[0]
                        imageList.append(text)
                    prop = {
                        'town': towns,
                        'slug': slug,
                        'yearBuilt': yearBuilt,
                        'address': address, 
                        'type': type,
                        'img': img,
                        'mlsNumber': mlsNumber,
                        'imageList': imageList,
                        'price': price,
                        'desc': desc,
                        'bd': bd,
                        'ba': ba,
                        'lotSize': lotSize,
                        'sqFt':sqFt,
                        # 'yearBuilt':yearBuilt,
                        'companyListed':companyListed
                    }
                    # if scrapeOrNot(status) == True:
                    propertiesList.append(prop)
                    btn = driver.find_elements_by_id("rapIDXReturnToSearchResultsFromListingButton")
                    btn[0].click()
                    incrementor +=1
                    time.sleep(4)





                # driver.get(url)
                # time.sleep(3)
                # cityField = driver.find_elements_by_id("City_Fill_In")
                # field = cityField[0]
                # field.send_keys(towns)
                # priceLowerBound = driver.find_elements_by_id("rapListingActualPriceInputFromField")
                # priceLower = priceLowerBound[0]
                # priceLower.send_keys("1500001")
                # priceHigherBound = driver.find_elements_by_id("rapListingActualPriceInputThruField")
                # priceHigher = priceHigherBound[0]
                # priceHigher.send_keys("1750000")
                # btn = driver.find_elements_by_id("rapBtnSubmitSearch")
                # btn[0].click()
                # time.sleep(3)
                # html = driver.page_source
                # soup = BeautifulSoup(html, features='html')
                # property = soup.find_all(class_="row searchResult rapIDXSearchResultPage0")
                # for i in property:
                #     status = i.find(class_='listingStatus').text
                #     print('status',status)
                #     address = i.find(class_="address").text
                #     sluger = i.find(class_="address").text
                #     slug = removeSpaces(sluger)
                    
                #     imgSrc = i.find(class_="img-responsive primaryimg")
                #     img = imgSrc['src']
                #     if img == None:
                #         img = ''
                    
                #     priceCheck = i.find(class_="rapIDXSearchResultsPriceTop")
                #     if priceCheck == None:
                #         price = ''
                #     else: 
                #         price = priceCheck.text
                    
                #     descCheck = i.find("div",{"id":"rapIDXMarketingRemarksMobile"})
                #     if descCheck == None:
                #         desc = ''
                #     else:
                #         desc = descCheck.text
                    
                #     bdCheck = i.find(class_="listing-info listingBeds")
                #     if bdCheck == None:
                #         bd = ''
                #     else:
                #         bd = bdCheck.text
                #     baCheck = i.find(class_="listing-info listingBaths")
                #     if baCheck == None:
                #         ba = ''
                #     else:
                #         ba = baCheck.text
                    
                #     lotSizeCheck = i.find(class_="listing-info listingLotz")
                #     if lotSizeCheck == None:
                #         lotSize = ''
                #     else:
                #         lotSize = lotSizeCheck.text
                #     sqFtCheck = i.find(class_="listing-info listingSqFt")
                #     if sqFtCheck == None:
                #         sqFt = ''
                #     else:
                #         sqFt = sqFtCheck.text
                    
                #     # yearBuilt = i.find(class_="listing-info listingYrBuilt").text
                #     # print(yearBuilt)
                #     companyListedCheck= i.find(class_="listingOfficeDisplay")
                    
                #     if companyListedCheck == None:
                #         companyListed = ''
                #     else:
                #         companyListed = companyListedCheck.text

                #     prop = {
                #         'town': towns,
                #         'slug': slug,
                #         'address': address, 
                #         'img': img,
                #         'price': price,
                #         'desc': desc,
                #         'bd': bd,
                #         'ba': ba,
                #         'lotSize': lotSize,
                #         'sqFt':sqFt,
                #         # 'yearBuilt':yearBuilt,
                #         'companyListed':companyListed
                #     }
                #     if scrapeOrNot(status) == True:
                #         print('pushing property')
                #         propertiesList.append(prop)
                # driver.back();
                # driver.refresh();

                # driver.get(url)
                # time.sleep(3)
                # cityField = driver.find_elements_by_id("City_Fill_In")
                # field = cityField[0]
                # field.send_keys(towns)
                # priceLowerBound = driver.find_elements_by_id("rapListingActualPriceInputFromField")
                # priceLower = priceLowerBound[0]
                # priceLower.send_keys("1750001")
                # btn = driver.find_elements_by_id("rapBtnSubmitSearch")
                # btn[0].click()
                # time.sleep(3)
                # html = driver.page_source
                # soup = BeautifulSoup(html, features='html')
                # property = soup.find_all(class_="row searchResult rapIDXSearchResultPage0")
                # for i in property:
                #     status = i.find(class_='listingStatus').text
                #     print('status',status)
                #     address = i.find(class_="address").text
                #     sluger = i.find(class_="address").text
                #     slug = removeSpaces(sluger)
                #     imgSrc = i.find(class_="img-responsive primaryimg")
                #     img = imgSrc['src']
                #     if img == None:
                #         img = ''
                    
                #     priceCheck = i.find(class_="rapIDXSearchResultsPriceTop")
                #     if priceCheck == None:
                #         price = ''
                #     else: 
                #         price = priceCheck.text
                    
                #     descCheck = i.find("div",{"id":"rapIDXMarketingRemarksMobile"})
                #     if descCheck == None:
                #         desc = ''
                #     else:
                #         desc = descCheck.text
                    
                #     bdCheck = i.find(class_="listing-info listingBeds")
                #     if bdCheck == None:
                #         bd = ''
                #     else:
                #         bd = bdCheck.text
                #     baCheck = i.find(class_="listing-info listingBaths")
                #     if baCheck == None:
                #         ba = ''
                #     else:
                #         ba = baCheck.text
                    
                #     lotSizeCheck = i.find(class_="listing-info listingLotz")
                #     if lotSizeCheck == None:
                #         lotSize = ''
                #     else:
                #         lotSize = lotSizeCheck.text
                #     sqFtCheck = i.find(class_="listing-info listingSqFt")
                #     if sqFtCheck == None:
                #         sqFt = ''
                #     else:
                #         sqFt = sqFtCheck.text
                    
                #     # yearBuilt = i.find(class_="listing-info listingYrBuilt").text
                #     # print(yearBuilt)
                #     companyListedCheck= i.find(class_="listingOfficeDisplay")
                    
                #     if companyListedCheck == None:
                #         companyListed = ''
                #     else:
                #         companyListed = companyListedCheck.text

                #     prop = {
                #         'town': towns,
                #         'slug': slug,
                #         'address': address, 
                #         'img': img,
                #         'price': price,
                #         'desc': desc,
                #         'bd': bd,
                #         'ba': ba,
                #         'lotSize': lotSize,
                #         'sqFt':sqFt,
                #         # 'yearBuilt':yearBuilt,
                #         'companyListed':companyListed
                #     }
                #     if scrapeOrNot(status) == True:
                #         print('pushing property')
                #         propertiesList.append(prop)
                # driver.back();
                # driver.refresh();
                
            print('properties list:',propertiesList)
            save_function(propertiesList)
        
        #calling the functions here
        scrapeProperties(townsList)