let display = document.getElementById("display");
let expression = "";
let lastInput = ""; // Track last input to prevent consecutive operators
let resultShown = false; // Track if a result was just shown

function appendToDisplay(value) {
    // Clear display if result is shown and a number is pressed
    if (resultShown && !isNaN(value)) {
        expression = "";
    }
    
    resultShown = false;

    // Prevent consecutive operators
    if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(lastInput)) {
        return;
    }

    // Ensure display starts correctly
    if (expression === "0" && value !== ".") {
        expression = "";
    }

    expression += value;
    lastInput = value;
    display.innerText = expression;
}

function calculate() {
    try {
        let result = eval(expression);

        // Handle floating point precision
        if (result % 1 !== 0) {
            result = result.toFixed(2);
        }

        expression = result.toString();
        display.innerText = expression;
        resultShown = true; // Mark result as shown
    } catch {
        expression = "Error";
        display.innerText = expression;
    }
}

function clearDisplay() {
    expression = "";
    lastInput = "";
    resultShown = false;
    display.innerText = "0";
}
