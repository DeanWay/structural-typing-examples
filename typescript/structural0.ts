
class Rectangle {
  constructor(private x: number, private y: number) { }
  area = () => this.x * this.y
  height = () => Math.max(this.x, this.y)
}

class EquilateralTriangle {
  constructor(private side_len: number) { }
  area = () => Math.sqrt(3) / 4 * this.side_len ** 2
  height = () => (this.side_len * Math.sqrt(3)) * 2
}

export const roundArea = (shape: { area(): number }) => Math.round(shape.area())


class SwimmingPool {
  area = () => 55.5
}

roundArea(new Rectangle(100, 50))
roundArea(new EquilateralTriangle(5))
roundArea(new SwimmingPool())
roundArea({ area: () => 20.8 })
