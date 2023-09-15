document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentValue = '0';
    let operator = '';
    let result = '';
  
    function updateDisplay() {
      display.textContent = currentValue;
    }
  
    function evaluateExpression(expression) {
      return eval(expression);
    }
  
    function handleClick(event) {
      const clickedButton = event.target;
      const buttonValue = clickedButton.textContent;
  
      if (buttonValue === 'AC') {
        currentValue = '0';
        operator = '';
        result = '';
      } else if (buttonValue >= '0' && buttonValue <= '9') {
        if ((currentValue === '0' || currentValue === result) && buttonValue !== '0') {
          currentValue = buttonValue;
        } else if (currentValue !== '0') {
          currentValue += buttonValue;
        }
      } else if (buttonValue === '.') {
        if (!currentValue.includes('.')) {
          currentValue += '.';
        }
      } else if (buttonValue === '=') {
        if (operator && result) {
          if (operator === '/' && currentValue === '0') {
            currentValue = 'Error';
          } else {
            result = evaluateExpression(result + operator + currentValue).toString();
            currentValue = result;
            operator = '';
          }
        }
      } else {
        if (buttonValue === '-' && (currentValue === '0' || currentValue === result)) {
          currentValue = '-';
        } else {
          if (operator && operator !== '-' && result && currentValue !== '0') {
            if (operator === '/' && currentValue === '0') {
              currentValue = 'Error';
            } else {
              currentValue = evaluateExpression(result + operator + currentValue).toString();
              operator = buttonValue;
              result = currentValue;
              currentValue = '0';
            }
          } else if (currentValue !== '0') {
            operator = buttonValue;
            result = currentValue;
            currentValue = '0';
          }
        }
      }
  
      updateDisplay();
    }
  
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', handleClick);
    });
  });