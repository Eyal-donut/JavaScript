//! Block 1

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9); 
var result = firstResult(2); 

// line 11 calls the otherFunction, the result is the function
//line 11 calls the result of otherFunction is 5.

//! Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);

//function a(){} is hoisted up, a is then reassigned to 10 only within the function and not on a global scope. Line 25 refers to the global scope.

//! Block 3
let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}
//line 33 gets the global value of i from line 30. After the timeout, the value of the global i is already 3. You don't get the value directly after every loop, just three times at the end of all loops.