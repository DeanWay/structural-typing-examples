from math import sqrt

class Rectangle:
    def __init__(
        self,
        x: int = 0,
        y: int = 0,
    ):
        self.x = x
        self.y = y

    def area(self) -> int:
        return self.x * self.y


class EquilateralTriangle:
    def __init__(self, side_len: int):
        self.side_len = side_len

    def area(self) -> float:
        return sqrt(3) / 4 * self.side_len ** 2


def round_area(shape: Rectangle) -> int:
    return int(round(shape.area()))


round_area(Rectangle(100, 50))
round_area(EquilateralTriangle(5))
