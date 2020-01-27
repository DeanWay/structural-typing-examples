from typing import Mapping, Hashable, Any, Optional, Union
from typing_extensions import TypedDict

StringMap = Mapping[str, str]

my_map: StringMap = {
    "one": 2,
    "three": "four",
    "five": {
       "six": "seven"
    }
}

KeyType = Optional[Hashable]
DictType = Mapping[KeyType, Any]

my_dict: DictType = {
    (1,2,3): "four",
    object(): {
        None: 10
    },
    "a": [1,2,3],
    None: 'x',
}

class User(TypedDict):
    name: str
    age: int

def greet(user: User) -> str:
    name = user['name']
    return f'Hello {name}!'

greet({ 'name': 'joe', 'age': 20 })

some_user: User = {
    'name': 'jan',
    'age': 1.2
}
