abstract class Shape {
  abstract area(): number
  abstract height(): number
}

class Rectangle extends Shape {
  constructor(private x: number, private y: number) {
    super()
  }
  area = () => this.x * this.y
  height = () => Math.max(this.x, this.y)
}

class EquilateralTriangle extends Shape {
  constructor(private sideLen: number) {
    super()
  }
  area = () => Math.sqrt(3) / 4 * this.sideLen ** 2
  height = () => (this.sideLen * Math.sqrt(3)) * 2
}
export const roundArea = (shape: Shape) => Math.round(shape.area())


class SwimmingPool {
  area = () => 55.5
}

roundArea(new Rectangle(100, 50))
roundArea(new EquilateralTriangle(5))
roundArea(new SwimmingPool())
