
class Rectangle {
    constructor(private x: number, private y: number) { }
    area = () => this.x * this.y
}

class EquilateralTriangle {
    constructor(private side_len: number) { }
    area = () => Math.sqrt(3) / 4 * this.side_len ** 2
}

export const round_area = (shape: Rectangle) => Math.round(shape.area())

round_area(new Rectangle(100, 50))
round_area(new EquilateralTriangle(5))
