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


def round_area(shape: Rectangle) -> int:
    return int(round(shape.area()))

round_area(Rectangle(100, 50))
