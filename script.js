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