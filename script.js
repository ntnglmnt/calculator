let core = document.createElement('div');
body.appendChild(core);

let display = document.createElement('div')
main.appendChild(display);

let buttonGrid = document.createElement('div')
main.appendChild(buttonGrid);

let buttonAC = document.createElement('button')
buttonGrid.value = 'AC'
buttonAC.classList.add('operator')
buttonGrid.appendChild(buttonAC)

let buttonSign = document.createElement('button')
buttonSign.value = ''
buttonSign.classList.add('operator')
buttonGrid.appendChild(buttonSign)

let buttonPercent = document.createElement('button')
buttonPercent.value = '%'
buttonPercent.classList.add('operator')
buttonGrid.appendChild(buttonPercent)

let buttonDivision = document.createElement('button')
buttonDivision.value = '/'
buttonDivision.classList.add('operator')
buttonGrid.appendChild(buttonDivision)

let buttonSeven = document.createElement('button')
buttonSeven.value = '7'
buttonSeven.classList.add('operand')
buttonGrid.appendChild(buttonSeven)

let buttonEight = document.createElement('button')
buttonEight.value = '8'
buttonEight.classList.add('operand')
buttonGrid.appendChild(buttonEight)

let buttonNine = document.createElement('button')
buttonNine.value = '9'
buttonNine.classList.add('operand')
buttonGrid.appendChild(buttonNine)

let buttonMultiply = document.createElement('button')
buttonMultiply.value = '*'
buttonMultiply.classList.add('operator')
buttonGrid.appendChild(buttonMultiply)

let buttonFour = document.createElement('button')
buttonFour.value = '4'
buttonFour.classList.add('operand')
buttonGrid.appendChild(buttonFour)

let buttonFive = document.createElement('button')
buttonFive.value = '5'
buttonFive.classList.add('operand')
buttonGrid.appendChild(buttonFive)

let buttonSix = document.createElement('button')
buttonSix.value = '6'
buttonSix.classList.add('operand')
buttonGrid.appendChild(buttonSix)

let buttonMinus = document.createElement('button')
buttonMinus.value = '-'
buttonMinus.classList.add('operator')
buttonGrid.appendChild(buttonMinus)

let buttonOne = document.createElement('button')
buttonOne.value = '1'
buttonOne.classList.add('operand')
buttonGrid.appendChild(buttonOne)

let buttonTwo = document.createElement('button')
buttonTwo.value = '2'
buttonTwo.classList.add('operand')
buttonGrid.appendChild(buttonTwo)

let buttonThree = document.createElement('button')
buttonThree.value = '3'
buttonThree.classList.add('operand')
buttonGrid.appendChild(buttonThree)

let buttonPlus = document.createElement('button')
buttonPlus.value = '+'
buttonPlus.classList.add('operator')
buttonGrid.appendChild(buttonPlus)

let buttonZero = document.createElement('button')
buttonZero.value = '0'
buttonZero.classList.add('operand')
buttonGrid.appendChild(buttonZero)

 function add(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
};

function mult(a, b) {
    return a * b;
};

function div(a, b) {
    return a / b;
};

let operandFirst = '1';

let operatorFirst = '+';

let operandSecond = '2';

let result 

function operate() {
    let a = operandFirst;
    let b = operandSecond;
    let c = operatorFirst;

    if (c == '+') {
        return result = add(a, b)
    }
    else if (c == '-') {
        return result = sub(a, b)
    }
    else if (c == '*') {
        return result = mult(a, b)
    }
    else return result = div(a, b)
};

console.log(operate(operandFirst, operandSecond))