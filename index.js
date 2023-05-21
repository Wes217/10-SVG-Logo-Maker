const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { shallowEqual } = require('@babel/types');

inquirer
.prompt([
  {
    type:'input',
    name:'text',
    message:'Enter Characters'
  },
  {
    type:'list',
    name:'shape',
    message:'Select a shape',
    choices:[Triangle, Circle, Square]
  }
])
.then((data) => {
  switch(data.shape){
    case 'Triangle':
      shape = new Triangle(0,0,100)
    break;
    case 'Circle':
      shape = new Circle(150,100,100)
    break;
    case 'Square':
      shape = new Square(0,0,100)
    break;
  }

  const svg =`
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  ${shape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`

fs.writeFile('./examples/Logo.svg',svg, (err) => {
  if (err) throw err;
})

})










