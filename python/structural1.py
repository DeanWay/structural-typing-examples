from typing_extensions import TypedDict

class User(TypedDict):
    name: str
    age: int

def greet(user: User) -> str:
    name = user['name']
    return f'Hello {name}!'

greet({ 'name': 'joe', 'age': 20 })

some_user: User = {
    'name': 'jan',
    'age': 42
}
