// Init Function
var result = "";
(function init() {
  var numberValue, operator;

  let displayArea = document.getElementById("displayArea");

  // Event Listeners for Numbers
  let numbersContainer = document.querySelectorAll(".numbers-container");
  numbersContainer.forEach((numberContainer) => {
    numberContainer.addEventListener("click", (event) => {
      if (result) {
        numberValue = Number(event.target.innerText);
        displayArea.value += numberValue;
      } else {
        result = Number(event.target.innerText);
        displayArea.value += Number(result);
      }
    });
  });

  // Event Listeners for Operators
  let operatorsContainer = document.querySelectorAll(".operators-container");
  operatorsContainer.forEach((operatorsContainer) => {
    operatorsContainer.addEventListener("click", (event) => {
      operator = event.target.innerText;
      displayArea.value += operator;
    });
  });

  // Event Listener for Equal button
  let equalTo = document.getElementById("equal");
  equalTo.addEventListener("click", (event) => {
    evaluate(displayArea, operator);
  });

  // Event Listeners for Clear
  let clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", (event) => {
    displayArea.value = "";
  });
})();

function evaluate(displayArea, operator) {
  let statement = displayArea.value;

  statement = statement.split(operator);

  if (operator === "+") {
    clearDisplay(displayArea);
    setDisplay(displayArea, add(statement));
  } else if (operator === "-") {
    clearDisplay(displayArea);
    setDisplay(displayArea, subtract(statement));
  } else if (operator === "*") {
    clearDisplay(displayArea);
    setDisplay(displayArea, multiply(statement));
  } else if (operator === "/") {
    clearDisplay(displayArea);
    setDisplay(displayArea, divide(statement));
  } else if (operator === "Square") {
    clearDisplay(displayArea);
    setDisplay(displayArea, square(statement[0]));
  } else if (operator === "Square Root") {
    clearDisplay(displayArea);
    setDisplay(displayArea, squareRoot(statement[0]));
  }
}

function add(numbers) {
  let result = 0;
  numbers.forEach((number) => {
    result += Number(number);
  });
  return result;
}

function subtract(numbers) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    result -= Number(numbers[i]);
  }
  return result;
}

function multiply(numbers) {
  let result = 1;
  numbers.forEach((number) => {
    result *= Number(number);
  });
  return result;
}

function divide(numbers) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] == 0) {
      result = "Invalid Input";
    } else {
      result /= Number(numbers[i]);
    }
  }
  return result;
}

function square(number) {
  return number * number;
}

function squareRoot(number) {
  let result = Math.sqrt(number);
  return result;
}
function clearDisplay(displayArea) {
  displayArea.value = "";
}

function setDisplay(displayArea, valueToSet) {
  displayArea.value = valueToSet;
}
