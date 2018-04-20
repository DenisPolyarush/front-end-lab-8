let calc = document.createElement('div');

let btns = document.createElement('div');

let numOne = document.createElement('input');
numOne.setAttribute('type', 'number');
numOne.setAttribute('placeholder', 'Enter number one');

let numTwo = document.createElement('input')
numTwo.setAttribute('type', 'number');
numTwo.setAttribute('placeholder', 'Enter number two');

let btnAddition = document.createElement('button');
btnAddition.innerHTML = '+';

let btnSubtraction = document.createElement('button');
btnSubtraction.innerHTML = '-';

let btnMultiplication = document.createElement('button');
btnMultiplication.innerHTML = '*';

let btnDivision = document.createElement('button');
btnDivision.innerHTML = '/';

calc.appendChild(numOne)
calc.appendChild(numTwo)

btns.appendChild(btnAddition)
btns.appendChild(btnSubtraction)
btns.appendChild(btnMultiplication)
btns.appendChild(btnDivision)

calc.appendChild(btns)

let out = document.querySelector('#root');
out.appendChild(calc)

export default {
numOne : numOne,
numTwo : numTwo,
btnAddition :btnAddition,
btnSubtraction :btnSubtraction,
btnMultiplication :btnMultiplication,
btnDivision :btnDivision
}