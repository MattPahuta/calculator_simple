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
  // if (symbol === 'C') {
  //   buffer = '0';
  //   runningTotal = 0;
  // } 

  switch (symbol) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      break;
    case '&plus;':
    case '&minus;':
    case '&times;':
    case '&divide;':
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
  // if (previousOperator === '+') {
  //   runningTotal += intBuffer;
  // } else if (previousOperator === '-') {
  //   runningTotal -= intBuffer;
  // } else if (previousOperator === '×') {
  //   runningTotal *= intBuffer;
  // } else {
  //   runningTotal /= intBuffer;
  // }

  switch (previousOperator) {
    case '+':
      runningTotal += intBuffer;
      break;
    case '-':
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
