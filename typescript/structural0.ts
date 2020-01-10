
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

export const round_area = (shape: { area(): number }) => Math.round(shape.area())


class SwimmingPool {
  area = () => 55.5
}

round_area(new Rectangle(100, 50))
round_area(new EquilateralTriangle(5))
round_area(new SwimmingPool())
round_area({ area: () => 20.8 })
