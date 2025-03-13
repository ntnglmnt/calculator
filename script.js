let calculation = [];
let operator 


let main = document.createElement('div');
main.classList.add('main')
document.body.appendChild(main);

let display = document.createElement('div')
display.classList.add('display')
main.appendChild(display);

let buttonGrid = document.createElement('div')
buttonGrid.classList.add('grid')
main.appendChild(buttonGrid);

let buttonAC = document.createElement('button')
buttonAC.textContent = 'AC'
buttonAC.classList.add('operator')
buttonAC.addEventListener('click', populate)
buttonGrid.appendChild(buttonAC)

let buttonSign = document.createElement('button')
buttonSign.textContent = '+/-'
buttonSign.classList.add('operator')
buttonSign.addEventListener('click', populate)
buttonGrid.appendChild(buttonSign)

let buttonPercent = document.createElement('button')
buttonPercent.textContent = '%'
buttonPercent.classList.add('operator')
buttonPercent.addEventListener('click', populate)
buttonGrid.appendChild(buttonPercent)

let buttonDivision = document.createElement('button')
buttonDivision.textContent = '/'
buttonDivision.classList.add('operator')
buttonDivision.addEventListener('click', populate)
buttonGrid.appendChild(buttonDivision)

let buttonSeven = document.createElement('button')
buttonSeven.textContent = '7'
buttonSeven.addEventListener('click', populate)
buttonSeven.classList.add('operand')

buttonGrid.appendChild(buttonSeven)

let buttonEight = document.createElement('button')
buttonEight.textContent = '8'
buttonEight.addEventListener('click', populate)
buttonEight.classList.add('operand')
buttonGrid.appendChild(buttonEight)

let buttonNine = document.createElement('button')
buttonNine.textContent = '9'
buttonNine.addEventListener('click', populate)
buttonNine.classList.add('operand')
buttonGrid.appendChild(buttonNine)

let buttonMultiply = document.createElement('button')
buttonMultiply.classList.add('operator')
buttonMultiply.textContent = '*'
buttonMultiply.addEventListener('click', populate)
buttonGrid.appendChild(buttonMultiply)

let buttonFour = document.createElement('button')
buttonFour.textContent = '4'
buttonFour.addEventListener('click', populate)
buttonFour.classList.add('operand')
buttonGrid.appendChild(buttonFour)

let buttonFive = document.createElement('button')
buttonFive.textContent = '5'
buttonFive.addEventListener('click', populate)
buttonFive.classList.add('operand')
buttonGrid.appendChild(buttonFive)

let buttonSix = document.createElement('button')
buttonSix.textContent = '6'
buttonSix.addEventListener('click', populate)
buttonSix.classList.add('operand')
buttonGrid.appendChild(buttonSix)

let buttonMinus = document.createElement('button')
buttonMinus.textContent = '-'
buttonMinus.classList.add('operator')
buttonMinus.addEventListener('click', populate)
buttonGrid.appendChild(buttonMinus)

let buttonOne = document.createElement('button')
buttonOne.textContent = '1'
buttonOne.addEventListener('click', populate)
buttonOne.classList.add('operand')
buttonGrid.appendChild(buttonOne)

let buttonTwo = document.createElement('button')
buttonTwo.textContent = '2'
buttonTwo.addEventListener('click', populate)
buttonTwo.classList.add('operand')
buttonGrid.appendChild(buttonTwo)

let buttonThree = document.createElement('button')
buttonThree.textContent = '3'
buttonThree.addEventListener('click', populate)
buttonThree.classList.add('operand')
buttonGrid.appendChild(buttonThree)

let buttonPlus = document.createElement('button')
buttonPlus.textContent = '+'
buttonPlus.addEventListener('click', populate)
buttonPlus.classList.add('operator')
buttonGrid.appendChild(buttonPlus)

let buttonZero = document.createElement('button')
buttonZero.textContent = '0'
buttonZero.addEventListener('click', populate)
buttonZero.classList.add('zerocase')
buttonGrid.appendChild(buttonZero)

let buttonEqual = document.createElement('button')
buttonEqual.textContent = '='
buttonEqual.classList.add('operator')
addEventListener('click', () => {
    if (operator === '-') {
        partOne = calculation.slice(0,operatorPosition);
        partTwo = calculation.slice(operatorPosition+1);
        partOneToString = partOne.join('').toString();
        partTwoToString = partTwo.join('').toString();
        let result = sub(Number(partOneToString), Number(partTwoToString))
        console.log(result);
    }
    else if (operator === '+') {
        partOne = calculation.clise(0, operatorPosition);
        partTwo = calculation.slice(operatorPosition+1);
        partOneToString = partOne.join('').toString();
        partTwoToString = partTwo.join('').toString();
        let result = add(Number(partOneToString), Number(partTwoToString))
        console.log(result);
    }
    else if (operator === '*') {
        partOne = calculation.clise(0, operatorPosition);
        partTwo = calculation.slice(operatorPosition+1);
        partOneToString = partOne.join('').toString();
        partTwoToString = partTwo.join('').toString();
        let result = mult(Number(partOneToString), Number(partTwoToString))
        console.log(result);
    }
    else {
        partOne = calculation.clise(0, operatorPosition);
        partTwo = calculation.slice(operatorPosition+1);
        partOneToString = partOne.join('').toString();
        partTwoToString = partTwo.join('').toString();
        let result = div(Number(partOneToString), Number(partTwoToString))
        console.log(result);
    }
}
)
buttonGrid.appendChild(buttonEqual)

function add(a, b) {
    let first = a;
    let second = b;
    return first + second;
};

function sub(a, b) {
    let first = a;
    let second = b;
    return first - second;
};

function mult(a, b) {
    let first = a;
    let second = b;
    return first * second;
};

function div(a, b) {
    let first = a;
    let second = b;
    return first / second;
};

let operatorPosition = 0;

function populate() {
    a = this.textContent
    calculation.push(a)
    if(this.classList.contains('operator')) {
        operator = this.textContent;
    }
    operatorPosition = calculation.indexOf(operator);

    console.log(calculation, operator, operatorPosition)
}

function operate() {

    let firstOperand
    let secondOperand
    let operatorSelection = operator

    if (operatorSelection === '-') {
    console.log(calculation.slice('-'))
    }
    else if (operatorSelection === '+'){

    }
    else if (operatorSelection === '/'){

    }
    else {
        return mult(firstOperand)
    }
};

console.log(operator)