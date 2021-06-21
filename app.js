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
}

function handleSymbol(symbol) {

}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer = buffer + numberString;
  }
  screen.innerText = buffer;
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
