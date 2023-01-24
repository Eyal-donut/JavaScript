// *  This code is much more readable, maintainable and reusable. *

/* 
  * The logic is abstracted into a single function, performOperation, which takes in two numbers and an operator, and returns the of  the operation. 
  * This function can now be reused anywhere we need to perform a similar operation, with different numbers and operators, without having to copy and paste the entire code. This makes the code more generic and less prone to errors.
*/
const performOperation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
};

const num1 = 5;
const num2 = 10;
const num3 = 15;
const num4 = 20;

console.log(performOperation(num1, num2, '+'));
console.log(performOperation(num3, num4, '-'));
console.log(performOperation(num1, num2, '*'));
console.log(performOperation(num3, num2, '/'));
