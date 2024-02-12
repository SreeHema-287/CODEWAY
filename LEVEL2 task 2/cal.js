let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
  if (displayValue !== '' && !isNaN(displayValue.slice(-1))) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  if (displayValue !== '' && !isNaN(displayValue.slice(-1))) {
    try {
      const result = eval(displayValue);
      displayValue = result.toString();
      document.getElementById('display').value = displayValue;
    } catch (error) {
      displayValue = '';
      document.getElementById('display').value = 'Error';
    }
  }
}
