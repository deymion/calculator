let operand1 = null,
    operand2 = null,
    operator = null,
    displayValue = 0,
    result = null,
    displayCleared = false;

const btn = document.querySelector('#btnKeys');

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
        handleOperator(target);
    } else {
        handleOperandInput(target);
    }
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
    }
}

function calculateResult() {
    if (operator === null) {
        return operand1;
    }

    try {
        result = operate(operator, operand1, operand2);
    } catch (e) {
        result = e.message;
    }
    return result;
}

function calculateAndDisplayResult() {
    if (operand1 === null) {
        operand1 = Number(displayValue);
    }
    if (operand2 === null) {
        operand2 = Number(displayValue);
    }

    displayValue = calculateResult();
    displayCleared = false;
    updateDisplay();
}

function handleOperator(op) {
    if (operand1 === null) {
        operand1 = Number(displayValue);
    } else if (operand2 === null) {
        operand2 = Number(displayValue);
    }

    // Perform calculation for the first single pair of numbers (e.g, (x + y) - z)
    if (operand1 !== null && operand2 !== null && operator !== null) {
        if (result === null) {
            calculateAndDisplayResult();
        }
        operand1 = result;
        operand2 = null;
        result = null;
    }
    operator = op;
    updateDisplay();
}

function handleOperandInput(input) {
    // Clear displayValue once before operand2 input
    if (operator !== null && !displayCleared) {
        clearDisplay();
        displayCleared = true; // Set the flag to true after clearing display
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
    displayCleared = false;
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
