
class Rectangle {
  constructor(private width: number, private height: number) { }
  area = () => this.width * this.height
}

class EquilateralTriangle {
  constructor(private sideLen: number) { }
  area = () => Math.sqrt(3) / 4 * this.sideLen ** 2
}

export const roundArea = (shape: Rectangle) => Math.round(shape.area())

roundArea(new Rectangle(100, 50))
roundArea(new EquilateralTriangle(5))
