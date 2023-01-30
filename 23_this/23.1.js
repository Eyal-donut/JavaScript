//? Q1
console.log(this === {}); //true
console.log(global === globalThis); //true

//in the DOM this === window, in Node.js I would've said global, but it is an empty object.... only globalThis refers to the global object.

//? Q2
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
    console.log(this);
  },
};
console.log(global.name); // undefined
myObj.greet();

//hello undefined. because this refers to an empty object. If it would have been globalThis - it would refer to global.name, which is also undefined. Explanation: same as Q1. In arrow functions, *this* inherits the context of the context in which the function is in (the context of the parent of the function)

//?Q3

const myFuncDec = function () {
  console.log(this);
};
//empty object again (globalThis would point to global). In a function invocation, this has the context in which the function lives in.

//? Q4 
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

//in an arrow function, this points to the context of the this above it. The most outside context is global, that's why it'll return an empty object again, or the window in DOM.

//? Q5

document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

// ???????????!!!!!!!!!!!!!!