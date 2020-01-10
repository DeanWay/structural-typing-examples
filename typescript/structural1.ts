
type ComplexList = [boolean, string, { x: number, y: number }]

const complexList: ComplexList = [true, 'hello', { x: 1, y: 'abc' }]

type FileModes = 'r' | 'w' | 'w+'

const openFile = (filename: string, mode: FileModes) => { }
openFile('hello.txt', 'x')


interface Person {
  name: string
  age: 10
}

interface Car {
  name: string
}

const joe: Person = {
  name: 'joe',
  age: 10,
}

const car: Car = joe
