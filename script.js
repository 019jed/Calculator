function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('display') 
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Syntax error';
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    
    // Function to process button presses
    function handleButtonInput(value) {
        if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(value);
        }
    }

    // Add event listeners to buttons for mouse click
    document.querySelectorAll('.calculator input[type="button"]').forEach(button => {
        button.addEventListener('click', function() {
            handleButtonInput(this.value);
        });
    });

    // Function to append values to the display
    function appendToDisplay(value) {
        display.value += value;
    }

    // Function to clear the display
    function clearDisplay() {
        display.value = '';
    }

    // Function to calculate the result
    function calculate() {
        try {
            // Assuming you have a function to safely evaluate expressions
            display.value = safeEvaluate(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }

    // Add event listener for keyboard input
    document.addEventListener('keydown', function(event) {
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];
        const key = event.key;
        if (allowedKeys.includes(key)) {
            appendToDisplay(key);
        } else if (key === 'Enter' || key === '=') {
            calculate();
            event.preventDefault();  // Prevent form submission
        } else if (key === 'Backspace') {
            backspace();
            event.preventDefault();  // Avoid browser back navigation
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });

    // Function to remove the last character
    function backspace() {
        display.value = display.value.substring(0, display.value.length - 1);
    }

    // Assuming you have an existing function to evaluate the expression safely
    function safeEvaluate(expression) {
        return Function('"use strict";return (' + expression + ')')();
    }
});
5465
