
let firstOperand = '';
let operator = null;
let secondOperand = '';
let operatorTwo = null;
let resultOutOfScope

function populateOperator(e) {
    
    if(e.target.classList.contains('operator') && operator === null && operatorTwo === null) {
        operator = e.target.textContent
        console.log(operator)
    }
    else if (e.target.classList.contains('operator') && operator != null && operatorTwo === null) {
        operatorTwo = e.target.textContent
        let result;

        if (operatorTwo === '+') {
            result = (Number(firstOperand) + Number(secondOperand))
            console.log(result)
            firstOperand = result
            secondOperand = ''
            operatorTwo = null;
        }
        else if (operatorTwo === '-') {
            result = (Number(firstOperand) - Number(secondOperand))
            console.log(result)
            firstOperand = result
            secondOperand = ''
            operatorTwo = null;
        }
        else if (operatorTwo === '*') {
            result = (Number(firstOperand) * Number(secondOperand))
            console.log(result)
            firstOperand = result
            secondOperand = ''
            operatorTwo = null;
        }
        else if (operatorTwo === '/') {
            result = (Number(firstOperand) / Number(secondOperand))
            console.log(result)
            firstOperand = result
            secondOperand = ''
            operatorTwo = null;
        }
        
        display.textContent = result.toFixed(1);
    }
}

function populateOperand (e) {
     if(operator === null) {
        
        a = e.target.textContent
        firstOperand += a
        display.textContent = firstOperand
        console.log(firstOperand)
    }
    else if(operator === '-', '+', '*', '/') {
        b = e.target.textContent
        secondOperand += b
        display.textContent = secondOperand
        console.log(secondOperand)
    }
}

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
buttonAC.addEventListener('click', () => {
    firstOperand = ''
    secondOperand = ''
    operator = ''
    display.textContent = ''
})
buttonGrid.appendChild(buttonAC)

let buttonSign = document.createElement('button')
buttonSign.textContent = '+/-'
buttonSign.classList.add('operator')
buttonSign.addEventListener('click', populateOperator)
buttonGrid.appendChild(buttonSign)

let buttonPercent = document.createElement('button')
buttonPercent.textContent = '%'
buttonPercent.classList.add('operator')
buttonPercent.addEventListener('click', populateOperator)
buttonGrid.appendChild(buttonPercent)

let buttonDivision = document.createElement('button')
buttonDivision.textContent = '/'
buttonDivision.classList.add('operator')
buttonDivision.addEventListener('click', populateOperator)
buttonGrid.appendChild(buttonDivision)

let buttonSeven = document.createElement('button')
buttonSeven.textContent = '7'
buttonSeven.addEventListener('click', populateOperand)
buttonSeven.classList.add('operand')

buttonGrid.appendChild(buttonSeven)

let buttonEight = document.createElement('button')
buttonEight.textContent = '8'
buttonEight.addEventListener('click', populateOperand)
buttonEight.classList.add('operand')
buttonGrid.appendChild(buttonEight)

let buttonNine = document.createElement('button')
buttonNine.textContent = '9'
buttonNine.addEventListener('click', populateOperand)
buttonNine.classList.add('operand')
buttonGrid.appendChild(buttonNine)

let buttonMultiply = document.createElement('button')
buttonMultiply.classList.add('operator')
buttonMultiply.textContent = '*'
buttonMultiply.addEventListener('click', populateOperator)
buttonGrid.appendChild(buttonMultiply)

let buttonFour = document.createElement('button')
buttonFour.textContent = '4'
buttonFour.addEventListener('click', populateOperand)
buttonFour.classList.add('operand')
buttonGrid.appendChild(buttonFour)

let buttonFive = document.createElement('button')
buttonFive.textContent = '5'
buttonFive.addEventListener('click', populateOperand)
buttonFive.classList.add('operand')
buttonGrid.appendChild(buttonFive)

let buttonSix = document.createElement('button')
buttonSix.textContent = '6'
buttonSix.addEventListener('click', populateOperand)
buttonSix.classList.add('operand')
buttonGrid.appendChild(buttonSix)

let buttonMinus = document.createElement('button')
buttonMinus.textContent = '-'
buttonMinus.classList.add('operator')
buttonMinus.addEventListener('click', populateOperator)
buttonGrid.appendChild(buttonMinus)

let buttonOne = document.createElement('button')
buttonOne.textContent = '1'
buttonOne.addEventListener('click', populateOperand)
buttonOne.classList.add('operand')
buttonGrid.appendChild(buttonOne)

let buttonTwo = document.createElement('button')
buttonTwo.textContent = '2'
buttonTwo.addEventListener('click', populateOperand)
buttonTwo.classList.add('operand')
buttonGrid.appendChild(buttonTwo)

let buttonThree = document.createElement('button')
buttonThree.textContent = '3'
buttonThree.addEventListener('click', populateOperand)
buttonThree.classList.add('operand')
buttonGrid.appendChild(buttonThree)

let buttonPlus = document.createElement('button')
buttonPlus.textContent = '+'
buttonPlus.addEventListener('click', populateOperator)
buttonPlus.classList.add('operator')
buttonGrid.appendChild(buttonPlus)

let buttonZero = document.createElement('button')
buttonZero.textContent = '0'
buttonZero.addEventListener('click', populateOperand)
buttonZero.classList.add('zerocase')
buttonGrid.appendChild(buttonZero)

let buttonEqual = document.createElement('button')
buttonEqual.textContent = '='
buttonEqual.classList.add('GAMIESAI')
buttonEqual.addEventListener('click', () => {
    let result;

    if (operator === '+') {
        result = (Number(firstOperand) + Number(secondOperand))
        console.log(result)
        firstOperand = result
        secondOperand = ''
        operator = ''
    }
    else if (operator === '-') {
        result = (Number(firstOperand) - Number(secondOperand))
        console.log(result)
        firstOperand = result
        secondOperand = ''
        operator = ''
    }
    else if (operator === '*') {
        result = (Number(firstOperand) * Number(secondOperand))
        console.log(result)
        firstOperand = result
        secondOperand = ''
        operator = ''
    }
    else if (operator === '/') {
        result = (Number(firstOperand) / Number(secondOperand))
        console.log(result)
        firstOperand = result
        secondOperand = ''
        operator = ''
    }
    
    display.textContent = result.toFixed(3);
})
buttonGrid.appendChild(buttonEqual);    

