// *** Calculator App JavaScript *** //

let runningTotal = 0; // Variable to hold running total
let buffer = "0"; // Variable to track displayed content
let previousOperator; // Variable for mathmatical operator selected

const screen = document.querySelector('.screen');

function buttonClick(value) {
  // console.log(value);
  if (isNaN(value)) { // not a number
    handleSymbol(value);
  } else { // is a number
    handleNumber(value)
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  console.log('handleSymbol', symbol)

  switch (symbol) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      break;
    case '=':
      if (previousOperator === null) {
        return; // need 2 numbers to do math
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case '+':
    case '−':
    case '×':
    case '÷':
      handleMath(symbol);
      break;
  }

}

function handleMath(symbol) {
  if (buffer === '0') {
    return; // do nothing
  }

  const intBuffer = parseInt(buffer); // turn the input string into a numbre

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;
  buffer = '0';
}

// × ÷ -
function flushOperation(intBuffer) {

  switch (previousOperator) {
    case '+':
      runningTotal += intBuffer;
      break;
    case '−':
      runningTotal -= intBuffer;
      break;
    case '×':
      runningTotal *= intBuffer;
      break;
    case '÷':
      runningTotal /= intBuffer;
      break;
  }

}

function handleNumber(numberString) {
  if (buffer === '0') {
    buffer = numberString;
  } else {
    buffer = buffer + numberString;
  }

  // console.log('buffer:', buffer)
}

// Initial setup function
function init() {
  document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
      buttonClick(event.target.innerText);
    })
}

// Run initial setup funciton
init();
