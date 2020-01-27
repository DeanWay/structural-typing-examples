
class Rectangle {
  constructor(private width: number, private height: number) { }
  area = () => this.width * this.height
}

export const roundArea = (shape: Rectangle) => Math.round(shape.area())

roundArea(new Rectangle(100, 50))
