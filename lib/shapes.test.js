const { Triangle, Circle, Square } = require('./shapes.js');

describe('Shapes', () =>{
    test('Circle should render correctly', () => {
        const triangle = new Triangle(0,0,100)
        const expected = '<circle x="0" y="0" side="100"/>'
        expect(triangle.render()).toEqual(expected)
    })


    test('Circle should render correctly', () => {
        const circle = new Circle(0,0,100)
        const expected = '<circle cx="0" cy="0" r="100"/>'
        expect(circle.render()).toEqual(expected)
    })


    test('Circle should render correctly', () => {
        const square = new Square(0,0,100)
        const expected = '<circle cx="0" cy="0" r="100"/>'
        expect(square.render()).toEqual(expected)
    })
})