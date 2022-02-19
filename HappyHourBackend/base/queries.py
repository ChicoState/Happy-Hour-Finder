import graphene 
from .types import PropertyType, PropertyImageType
from homes.models import Property, PropertyImage
from django.db.models import Q

class Query(graphene.ObjectType):
    feed = graphene.List(PropertyType)
    property = graphene.Field(PropertyType, postId=graphene.String())
    fillter = graphene.List(PropertyType, search=graphene.String())
    propertyimages = graphene.List(PropertyImageType, property=graphene.ID())

    def resolve_feed(parent,info):
        return Property.objects.all()

    def resolve_property(parent,info, postId):
        return Property.objects.get(slug=postId)
    
    def resolve_propertyimages(parent,info, property = None,**kwargs):
        if property:
            return PropertyImage.objects.filter(property__id=property)
        else:
            return PropertyImage.objects.all()


    def resolve_fillter(self, info, search=None, **kwargs):
        if search:
            filter = (
                Q(address__icontains=search) |
                Q(town__icontains=search)
            )
            return Property.objects.filter(filter)
        
        return Property.objects.all()
        