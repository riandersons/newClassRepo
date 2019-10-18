// Takes in all of the command line arguments
const inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
const operand = inputString[2];
const num1 = inputString[3];
const num2 = inputString[4];

// Here's the variable we will be modifying with the new numbers
let outputNum;

// Determines the operand selected...
// Based on the operand we run the appropriate math on the two numbers
if (operand === "add") {
  outputNum = parseFloat(num1) + parseFloat(num2);
}

else if (operand === "subtract") {
  outputNum = parseFloat(num1) - parseFloat(num2);
}

else if (operand === "multiply") {
  outputNum = parseFloat(num1) * parseFloat(num2);
}

else if (operand === "divide") {
  outputNum = parseFloat(num1) / parseFloat(num2);
}

else if (operand === "remainder") {
  outputNum = parseFloat(num1) % parseFloat(num2);
}

else if (operand === "exp") {
  outputNum = Math.pow(num1, num2);
}

else if (operand === "algebra") {
  outputNum = parseAlgebra(num1);
}

else {
  outputNum = "Not a recognized command";
}


// Prints the outputNumber
console.log(outputNum);

// =======================================================

// BONUS - Algebra
// Here we take in a string expression.
// We assume input is always of the form "ax+b=c"
// And we returns the parsed result

function parseAlgebra(equation) {
  // Getting the index of x in the equation
  let xIndex = equation.indexOf("x");
  // Finding the index of the sign
  let signIndex = xIndex + 1;
  // Getting the index of the equals sign
  let equalIndex = equation.indexOf("=");
  // Getting the numerical value for the first number to appear in the equation
  let firstNum = parseInt(equation.substring(0, xIndex));
  // Getting the sign out of our equation
  let sign = equation[signIndex];
  // Getting the numerical value of the second number in the equation by grabbing the
  // piece of the equation between the operator and equals sign
  let secondNum = parseInt(equation.substring(signIndex + 1, equalIndex));
  // Getting the third number by grabbing the piece of the equation between the equals
  // sign and the end of the equation
  let thirdNum = parseInt(equation.substring(equalIndex + 1, equation.length));
  // Defining a result letiable we'll use to hold our solution
  let result;

  // Performing the appropriate operation based on the sign
  if (sign === "+") {
    result = (thirdNum - secondNum) / firstNum;
  }
  else if (sign === "-") {
    result = (thirdNum + secondNum) / firstNum;
  }
  else if (sign === "*") {
    result = (thirdNum / secondNum) / firstNum;
  }
  else if (sign === "/") {
    result = (thirdNum * secondNum) / firstNum;
  }
  return result;
}
