from abc import ABCMeta, abstractmethod
from math import sqrt
from typing import Union, Protocol, SupportsRound

class Rectangle:
    def __init__(
        self,
        width: int,
        height: int,
    ):
        self.width = width
        self.height = height

    def area(self) -> int:
        return self.width * self.height


class EquilateralTriangle:
    def __init__(self, side_len: int):
        self.side_len = side_len

    def area(self) -> float:
        return sqrt(3) / 4 * self.side_len ** 2

class SwimmingPool:
    def area(self) -> float:
        return 50.5


class Shape(Protocol):
    def area(self) -> SupportsRound: ...

def round_area(shape: Shape):
    return int(round(shape.area()))


round_area(Rectangle(100, 50))
round_area(EquilateralTriangle(5))
round_area(SwimmingPool())
