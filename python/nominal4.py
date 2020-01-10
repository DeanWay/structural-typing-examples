from abc import ABCMeta, abstractmethod
from math import sqrt
from typing import Union


class Shape(metaclass=ABCMeta):
    @abstractmethod
    def area(self) -> Union[int, float]: ...


class Rectangle(Shape):
    def __init__(
        self,
        x: int = 0,
        y: int = 0,
    ):
        self.x = x
        self.y = y

    def area(self) -> int:
        return self.x * self.y


class EquilateralTriangle(Shape):
    def __init__(self, side_len: int):
        self.side_len = side_len

    def area(self) -> float:
        return sqrt(3) / 4 * self.side_len ** 2


class SwimmingPool:
    def area(self) -> float:
        return 50.5


def round_area(shape: Shape):
    return int(round(shape.area()))


round_area(Rectangle(100, 50))
round_area(EquilateralTriangle(5))
round_area(SwimmingPool())
