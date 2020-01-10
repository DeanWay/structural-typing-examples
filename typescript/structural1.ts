// tuple types!
type ComplexList = [boolean, string, { x: number, y: number }]

const complexList: ComplexList = ['true', 'hello', { x: 1, y: 'abc' }]

// literal and union types!
type FileModes = 'r' | 'w' | 'w+'

const openFile = (filename: string, mode: FileModes) => { }
openFile('hello.txt', 'x')


// strucutal assignability!
interface Person {
  name: string
  age: number
}

interface Boat {
  name: string
}

const joe: Person = {
  name: 'joe',
  age: 10,
}

const boat: Boat = joe

// Intersection types and recursive type definitions!
type LinkedList<T> = T & { next: LinkedList<T> }
let people: LinkedList<Person>;


// more union types!
interface MouseEvent {
  type: 'mouse'
  cursorLocation: { x: number, y: number }
}

interface KeyboardEvent {
  type: 'keyboard'
  keyCode: number
  key: string
}

interface MessageEvent {
  type: 'message'
  data: string
}

type IOEvent = MouseEvent | KeyboardEvent | MessageEvent

const eventHandler = (event: IOEvent): string => {
  switch (event.type) {
    case 'mouse':
      return `${event.cursorLocation.x}, ${event.cursorLocation.y}`
    case 'keyboard':
      return event.key
    case 'message':
      return event.data
  }
}
