const {checkTextInput, checkColorInput} = require('./validate')

describe('Validate', () =>{
    test('If 3 characters or less return true',()=>{
        const result = checkTextInput('123')
        expect(result).toEqual(true)
    })
    test('If Color keyword return true', () =>{
        const result = checkColorInput('red')
        
        expect(result).toEqual(true)
    })
    test('If hexadecimal return true', () =>{
        const result = checkColorInput('#AB6759')
        
        expect(result).toEqual(true)
    })
})