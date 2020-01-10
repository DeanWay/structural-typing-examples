abstract class Shape {
  abstract area(): number
}

class Rectangle extends Shape {
  constructor(private x: number, private y: number) {
    super()
  }
  area = () => this.x * this.y
}

class EquilateralTriangle extends Shape {
  constructor(private sideLen: number) {
    super()
  }
  area = () => Math.sqrt(3) / 4 * this.sideLen ** 2
}
export const roundArea = (shape: Shape) => Math.round(shape.area())


class SwimmingPool {
  area = () => 55.5
}

roundArea(new Rectangle(100, 50))
roundArea(new EquilateralTriangle(5))
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html
roundArea(new SwimmingPool())
