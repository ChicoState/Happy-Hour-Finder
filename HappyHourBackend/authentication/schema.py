import graphene 
from graphene_django import DjangoObjectType
from authentication.models import User

class UserType(DjangoObjectType):
    class Meta:
        model = User

class CreateUser(graphene.Mutation):
    message = graphene.String()
    user = graphene.String(required=True)

    class Arguments:
        username = graphene.String()
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, **kwargs):
        user = User.objects.create_user(
            email=kwargs.get('email'),
            username=kwargs.get('username'),
        )
        user.set_password(kwargs.get('password'))
        user.save()
        return CreateUser(user=user, message="Succesfully create user, {}".format(user.username))

class Mutation(graphene.ObjectType):
   create_user = CreateUser.Field()