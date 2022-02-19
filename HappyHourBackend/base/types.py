from graphene.types import field
from graphene_django import DjangoObjectType
from homes.models import Property, PropertyImage

class PropertyType(DjangoObjectType):
    class Meta:
        model = Property
        fields = ("id","slug","address","img","price","desc","bd","ba","lotSize","sqFt","companyListed")

class PropertyImageType(DjangoObjectType):
    class Meta:
        model = PropertyImage
        fields = ('property','image')


