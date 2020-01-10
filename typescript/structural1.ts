
type ComplexList = [boolean, string, { x: number, y: number }]

const complexList: ComplexList = [true, 'hello', { x: 1, y: 'abc' }]

type FileModes = 'r' | 'w' | 'w+'

const openFile = (filename: string, mode: FileModes) => { }
openFile('hello.txt', 'x')
