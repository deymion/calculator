let input = document.querySelector('#display');
let btn = document.querySelector('#btnKeys');

btn.addEventListener('click', (event) => {
    let target = event.target.value;

    if (target === 'clear') {
        clearDisplay();
    } else if (target === 'delete') {
        // Execute function to delete
    } else if (target === 'equal-sign') {
        // Execute function to calculate
    } else if (target === '+' || target === '-' || target === '*' || target === '/') {
        // Execute function to perform operation
    } else {
        updateDisplay(target);
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

function clearDisplay() {
    return input.textContent = "";
}

function updateDisplay(str) {
    input.textContent += `${str}`;
}
