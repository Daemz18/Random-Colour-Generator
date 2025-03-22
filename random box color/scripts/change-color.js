const box = document.getElementById('box');
const button = document.getElementById('button');
const tag = document.getElementById('tag')

const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let hexCode = '#';
let count = 0

function randomNum() {
  return Math.floor(Math.random() * 16)
}

function changeColor() {
  //generates the hex code
  while (count < 6) {
    hexCode += hexDigits[randomNum()];
    count++;
    console.log(hexCode)
  }
  
  //Applies color code to style the box
  box.style.backgroundColor = hexCode;

  //uses ntc name generator to get the names of colors based on hex code
  let colorName = ntc.name(hexCode);
  tag.innerHTML = colorName[1];

  //resets everything before end of function
  count = 0
  hexCode = "#"
}

button.addEventListener('click', changeColor);