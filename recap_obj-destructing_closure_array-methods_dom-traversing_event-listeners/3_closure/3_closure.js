
// Example
// Create a function makePassword that returns a function that takes in a password and returns a message indicating whether the input matches the original password.

function makePassword(password) {
  return function (input) {
    return input === password ? "Access granted." : "Access denied.";
  };
}
const checkPassword = makePassword("secret");
console.log(checkPassword("secret")); // "Access granted."
console.log(checkPassword("notsecret")); // "Access denied."

// Explanation: The function makePassword returns another function that takes in an input and compares it to the original password. The inner function has access to the password variable, creating a closure.


// 1. Create a function counter that returns a function that increments and returns a counter variable. The counter should not be accessible from outside the function.
function counter(){
  let counter = 0
  return function counterFunc(){
    return counter++
  }
}
const anotherFunc = counter()

console.log(anotherFunc())
console.log(anotherFunc())

// 2. Create a function addMaker that takes in a value and returns a function that adds that value to its input.
function addMaker(value){
  return function adder(input){
    return value + input
  }
}
const addToFive = addMaker(5)
console.log(addToFive(3))

// 3. Create a function adder that takes in a value and returns an object with two methods: add and reset. The add method takes in a number and returns the sum of the original value and the input, and the reset method resets the value back to the original value.
const adder = (value) => {
  return {
    addToValue(input){
      return value = value + input

    },
    resetValue(resetTo){
      return value = resetTo
    }
  }
}
const addToThree = adder(3)
console.log(addToThree.addToValue(1))
console.log(addToThree.addToValue(1))
console.log(addToThree.addToValue(1))
console.log(addToThree.resetValue(3))
console.log(addToThree.addToValue(10))
