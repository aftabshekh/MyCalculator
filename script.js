// script.js

let input = "";

// Append number to the screen
const appendNumber = (number) => {
    input += number;
    document.getElementById("result").value = input;
};

// Append operator to the screen
const appendOperator = (operator) => {
    if (input.length && !isNaN(input[input.length - 1])) {
        input += operator;
        document.getElementById("result").value = input;
    }
};

// Clear the display screen
const clearScreen = () => {
    input = "";
    document.getElementById("result").value = input;
};

// Delete the last character
const deleteLast = () => {
    input = input.slice(0, -1);
    document.getElementById("result").value = input;
};

// Calculate the result
const calculate = () => {
    try {
        input = eval(input.replace('×', '*').replace('÷', '/').replace('%', '/100'));
        document.getElementById("result").value = input;
        input = input.toString();
    } catch (error) {
        document.getElementById("result").value = "Error";
        input = "";
    }
};

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearScreen();
    } else if (key === '.') {
        appendOperator('.');
    }
});
