
class Rectangle {
  constructor(private x: number, private y: number) { }
  area = () => this.x * this.y
}

export const roundArea = (shape: Rectangle) => Math.round(shape.area())

roundArea(new Rectangle(100, 50))
