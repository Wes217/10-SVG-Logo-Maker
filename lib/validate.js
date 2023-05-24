const colors = require('./colorKeyWords.js');

function checkTextInput(input){
    if( input.length > 3) return "Your text can only have three characters"

    return true
}

function checkColorInput(input){
    const hexCodeCheck = /^#([0-9A-F]{3}){1,2}$/i.test(input)

    const lowerColors = colors.map(color => color.toLowerCase())
    const colorKeywordCheck = lowerColors.includes(input.toLowerCase())
    
    if(hexCodeCheck || colorKeywordCheck)return true
    return 'Thats not a color'
}


module.exports = {checkTextInput, checkColorInput}