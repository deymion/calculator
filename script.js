let operand1 = null,
    operand2 = null,
    operator = null,
    displayValue = 0,
    result = null;

let btn = document.querySelector('#btnKeys');

btn.addEventListener('click', handleClick);

function handleClick(event) {
    let target = event.target.value;

    if (target === 'clear') {
        clearAll();
    } else if (target === 'signs') {
        // Execute function to handle sign change
    } else if (target === 'equal-sign') {
        // Execute function to calculate
        calculateAndDisplayResult();
    } else if (target === '%') {
        // Execute function to operate percentage value
    } else if (target === '+' || target === '-' || target === '*' || target === '/') {
        // Execute function to perform operation
        handleOperator(target);
    } else {
        // If operand1 and operand are set, the display should clear once
        // new input for operand2 continue function `setDisplay()`
        handleOperandInput(target);
    }
}

function calculateAndDisplayResult() {
    if (operand2 === null) {
        operand2 = Number(displayValue);
    }
    calculateResult();
    displayValue = result;
    updateDisplay();
}

function handleOperator(op) {
    operator = op;

    if (operand1 !== null && operand2 !== null) {
        calculateResult();
        displayValue = result;
        operand1 = result;
        operand2 = null;
    } if (operand1 === null) {
        operand1 = Number(displayValue);
    } else if (operand2 === null) {
        operand2 = Number(displayValue);
    }

    // Log for debugging
    console.log(`operator: ${operator}`);
    console.log(typeof operand1, `operand1: ${operand1}`);
    console.log(typeof operand2, `operand2: ${operand2}`);

    updateDisplay();
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                throw new Error('Math Error');
            } else {
                return a / b;
            }
        default:
            throw new Error('Invalid Format');
    }
}

function calculateResult() {
    try {
        result = operate(operator, operand1, operand2);
    } catch (error) {
        displayValue = error.message;
        updateDisplay();
    }
}

function handleOperandInput(input) {
    // If operand1 and operand2 are set, clear the display for new input
    if (operand1 !== null && operand2 !== null) {
        clearDisplay();
    }
    setDisplay(input);
    updateDisplay();
}

function clearAll() {
    operand1 = null;
    operand2 = null;
    operator = null;
    displayValue = 0;
    result = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = 0;
    return true;
}

function setDisplay(str) {
    displayValue = Number(new String(displayValue + str));
}

function updateDisplay() {
    let display = document.querySelector('#display');
    display.textContent = displayValue;
}
