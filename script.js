let operand1 = null,
    operand2 = null,
    operator = null,
    displayValue = 0,
    result = null;

let btn = document.querySelector('#btnKeys');

btn.addEventListener('click', (event) => {
    let target = event.target.value;

    if (target === 'clear') {
        clearDisplay();
    } else if (target === 'signs') {
        // Execute function to delete
    } else if (target === 'equal-sign') {
        // Execute function to calculate
        calculateResult();
        updateDisplay();
    } else if (target === '%') {
        // Execute function to operate percentage value
    } else if (target === '+' || target === '-' || target === '*' || target === '/') {
        // Execute function to perform operation
        operator = target;
        if (operand1 === null) {
            operand1 = Number(displayValue);
        } else if (operand2 === null) {
            operand2 = Number(displayValue);
        }
        // Check values
        // console.log(`operator: ${operator}`);
        // console.log(typeof operand1, `operand1: ${operand1}`);
        // console.log(typeof operand2, `operand2: ${operand2}`);

        displayValue = '';
        updateDisplay();
    } else {
        setDisplay(target);
        updateDisplay();
    }
});

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
    if (operand2 === null) {
        operand2 = Number(displayValue);
        try {
            displayValue = operate(operator, operand1, operand2);
        } catch (error) {
            displayValue = error.message;
            updateDisplay();
        }
    }
}

function clearDisplay() {
    operand1 = null;
    operand2 = null;
    operator = null;
    displayValue = 0;
    result = null;
    updateDisplay();
}

function setDisplay(str) {
    displayValue = Number(new String(displayValue + str));
}

function updateDisplay() {
    let display = document.querySelector('#display');
    display.textContent = displayValue;
}
