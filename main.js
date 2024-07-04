function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "There’s a time and place for everything, but not now. - Professor Oak"
    }
    
    return num1 / num2;
}

function operate(num1, num2, operator) {
    return operator(num1, num2);
}

function calculate(expression) {
    const arguments = expression.split(/[+\-/\*]/);
    const num1 = parseInt(arguments[0]);
    const num2 = parseInt(arguments[1]);
    const operator = expression.match(/[+\-/\*]/)[0];
    let result;

    switch(operator) {
        case "+":
            result = operate(num1, num2, add);
            break;
        case "-":
            result = operate(num1, num2, subtract);
            break;
        case "*":
            result = operate(num1, num2, multiply);
            break;
        case "/":
            result = operate(num1, num2, divide);
            break;
        default:
            result = 0;
            break;
    }

    display.textContent = result;
}

const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#display");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.value;

        if (value === "calculate") {
            calculate(display.textContent)
        } else if (value === "clear") {
            display.textContent = "";
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (/\d+[+\-/\*]\d+/.test(display.textContent)) {
                calculate(display.textContent);
                display.textContent += e.target.value;
            } else {
                display.textContent += value;
            }
        } else {
            display.textContent += value;
        }
    });
});