from django.db import models

# PropChoices = (("Sale","For Sale"),
# ("Rent","For Rent"),
# ("Sold","Sold")
# )


class Property(models.Model):
    town = models.CharField(max_length=90, null=True,blank=True)
    type = models.CharField(max_length=150,null=True,blank=True)
    slug = models.SlugField(max_length=1000,null=True,blank=True, unique=False)
    address = models.TextField()
    listingAgent = models.CharField(max_length=200, null=True,blank=True)
    mlsNumber = models.CharField(max_length=100,null=True,blank=True)
    yearBuilt = models.CharField(max_length=5, null=True,blank=True)
    heating = models.CharField(max_length=10,null=True,blank=True)
    cooling = models.CharField(max_length=10,null=True,blank=True)
    parking = models.CharField(max_length=200,null=True,blank=True)
    img = models.TextField(null=True,blank=True)
    price = models.TextField(null=True,blank=True)
    desc = models.TextField(null=True,blank=True)
    bd = models.TextField(null=True,blank=True)
    ba = models.TextField(null=True,blank=True)
    lotSize = models.TextField(null=True,blank=True)
    sqFt = models.TextField(null=True,blank=True)
    companyListed = models.TextField(null=True,blank=True)
    
    def __str__(self):
        return self.address

class PropertyImage(models.Model):
    property = models.ForeignKey(Property, related_name='images',on_delete=models.CASCADE)
    image = models.TextField(null=True,blank=True)