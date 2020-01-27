from math import sqrt

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


def round_area(shape: Rectangle) -> int:
    return int(round(shape.area()))

round_area(Rectangle(100, 50))
