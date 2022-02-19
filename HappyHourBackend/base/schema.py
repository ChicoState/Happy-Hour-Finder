from .queries import Query
import graphene
from authentication.schema import Mutation as AuthMutation

class Mutation(AuthMutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query,mutation=Mutation)

