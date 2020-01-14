import graphene
from graphene import Field, String
from fastapi import FastAPI
from starlette.graphql import GraphQLApp
from starlette.middleware.cors import CORSMiddleware
from random import randint

class Square(graphene.ObjectType):
    side_len = graphene.Float(required=True)

class Rectangle(graphene.ObjectType):
    width = graphene.Float(required=True)
    height = graphene.Float(required=True)

class Circle(graphene.ObjectType):
    radius = graphene.Float(required=True)

class Shape(graphene.Union):
    class Meta:
        types = (Square, Rectangle, Circle)

class Query(graphene.ObjectType):
    shape = Shape()

    def resolve_shape(self, info):
        choice = randint(1, 3)
        if choice == 1:
            return Square(side_len=10.123)
        if choice == 2:
            return Rectangle(width=10, height=20)
        if choice == 3:
            return Circle(radius=2.56)


app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_route("/", GraphQLApp(schema=graphene.Schema(query=Query)))
