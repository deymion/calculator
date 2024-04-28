let input = document.querySelector('#input');

let btn = document.querySelector('#btnKeys');

btn.addEventListener('click', (event) => {
    let target = event.target;

    if (target.textContent === 'AC') {
        clearDisplay();
    } else if (target.textContent === 'C') {
        // Execute function to delete
    } else if (target.textContent === '=') {
        // Execute function to calculate
    } else {
        enterInputOnDisplay(target.textContent);
    }
});

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

function operate(operator, n1, n2) {
    return operator === "+" ? add(n1, n2)
        : operator === "-" ? subtract(n1, n2)
            : operator === "x" ? multiply(n1, n2)
                : operator === "/" ? divide(n1, n2) : 'Unvalid Format';
}

function clearDisplay() {
    return input.textContent = "";
}

function enterInputOnDisplay(str) {
    input.textContent += str;
}
