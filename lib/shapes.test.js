const { Triangle, Circle, Square } = require('./shapes.js');

describe('Shapes', () =>{
    test('Triangle should render correctly', () => {
        const triangle = new Triangle()
        const expected = `<polygon points="150,10 25,190 275,190"/>`
        expect(triangle.render()).toEqual(expected)
    })


    test('Circle should render correctly', () => {
        const circle = new Circle(0,0,100)
        const expected = '<circle cx="0" cy="0" r="100"/>'
        expect(circle.render()).toEqual(expected)
    })


    test('Square should render correctly', () => {
        const square = new Square(0,0)
        const expected = `<rect x="0" y="0" width="150" height="150"/>`
        expect(square.render()).toEqual(expected)
    })
})