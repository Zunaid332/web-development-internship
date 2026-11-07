
const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let newNumber = true;

function addNumber(number) {
    if (display.value === "Error") {
        clearDisplay();
    }

    if (number === "." && newNumber) {
        display.value = "0";
        newNumber = false;
    }

    if (number === "." && display.value.includes(".")) {
        return;
    }

    if (newNumber) {
        display.value = number === "." ? "0." : number;
        newNumber = false;
    } else {
        if (display.value === "0" && number !== ".") {
            display.value = number;
        } else {
            display.value += number;
        }
    }
}

function chooseOperator(selectedOperator) {
    if (display.value === "Error") {
        return;
    }

    if (operator !== "" && !newNumber) {
        calculate();
    }

    firstNumber = display.value;
    operator = selectedOperator;
    newNumber = true;
}

function calculate() {
    if (operator === "" || firstNumber === "" || newNumber) {
        return;
    }

    const secondNumber = parseFloat(display.value);
    const first = parseFloat(firstNumber);
    let result;

    if (operator === "+") {
        result = first + secondNumber;
    } else if (operator === "-") {
        result = first - secondNumber;
    } else if (operator === "*") {
        result = first * secondNumber;
    } else if (operator === "/") {
        if (secondNumber === 0) {
            display.value = "Error";
            firstNumber = "";
            operator = "";
            newNumber = true;
            return;
        }

        result = first / secondNumber;
    }

    display.value = Number(result.toPrecision(10)).toString();

    firstNumber = "";
    operator = "";
    newNumber = true;
}

function clearDisplay() {
    display.value = "0";
    firstNumber = "";
    operator = "";
    newNumber = true;
}

function deleteNumber() {
    if (display.value === "Error") {
        clearDisplay();
        return;
    }

    if (newNumber) {
        return;
    }

    display.value = display.value.slice(0, -1);

    if (display.value === "" || display.value === "-") {
        display.value = "0";
        newNumber = true;
    }
}
