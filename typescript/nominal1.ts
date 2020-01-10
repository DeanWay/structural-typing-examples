
class Rectangle {
  constructor(private x: number, private y: number) { }
  area = () => this.x * this.y
}

export const round_area = (shape: Rectangle) => Math.round(shape.area())

round_area(new Rectangle(100, 50))
