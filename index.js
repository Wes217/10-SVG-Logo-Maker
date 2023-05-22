const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

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
  },
  {
    type:'input',
    name:'shapeColor',
    message:'Shape color',
  }
])
.then((data) => {
  switch(data.shape){
    case 'Triangle':
      shape = new Triangle()
    break;
    case 'Circle':
      shape = new Circle(150,100,100)
    break;
    case 'Square':
      shape = new Square(75,25,100)
    break;
  }

  const svg =`
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  ${shape.render(data.shapeColor)}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.text}</text>

</svg>`

fs.writeFile('./examples/Logo.svg',svg, (err) => {
  if (err) throw err;
})

})










