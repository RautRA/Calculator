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
    return num1 / num2;
}

function operate(num1, num2, operator) {
    return operator(num1, num2);
}

console.log("Add 2 + 3: ", operate(2, 3, add));
console.log("Subtract 3 - 2: ", operate(3, 2, subtract));
console.log("Multiply 2 * 3: ", operate(2, 3, multiply));
console.log("Divide 4 / 2: ", operate(4, 2, divide));

const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#display");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.value === "calculate") {
            return
        } else if (e.target.value === "clear") {
            display.textContent = "";
        } else {
            if (display.textContent === "0") {
                display.textContent = "";
            }
            display.textContent += e.target.value;
        }
    });
});