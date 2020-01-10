
class Rectangle {
  constructor(private x: number, private y: number) { }
  area = () => this.x * this.y
}

class EquilateralTriangle {
  constructor(private sideLen: number) { }
  area = () => Math.sqrt(3) / 4 * this.sideLen ** 2
}

export const roundArea = (shape: Rectangle) => Math.round(shape.area())

roundArea(new Rectangle(100, 50))
roundArea(new EquilateralTriangle(5))
