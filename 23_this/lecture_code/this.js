// ? 1. This keyword
// From a background like Java, PHP, C# or other standard language, this
//  is the instance of the current object in the class method. this cannot be used outside
//  the method and such a simple approach does not create confusion.

// ! Before starting, let's familiarize with a couple of terms:
// Invocation: of a function is executing the code that makes the body of a function,
//  or simply calling the function. For example parseInt function invocation is parseInt('15')

// Context: of an invocation is the value of this within function body.

// Scope: is the set of variables, objects, and functions you have access to.

// ! The 4 invocation types:
// 1. Function invocation: the function is invoked as a function, not as a method of an object.
// 2. Method invocation: the function is invoked as a method of an object.
// 3. Constructor invocation: the function is invoked with the new operator. (new RegExp('\\d'))
// 4. Indirect invocation: the function is invoked using call or apply method.

// ! The 4 invocation types and their contexts:
// 1. Function invocation: this is the global object (window in browser).
// 2. Method invocation: this is the object that is before the dot.
// 3. Constructor invocation: this is the newly created object.
// 4. Indirect invocation: this is the object that is passed as the first argument to call or apply.

// ! The 4 invocation types and their scopes:
// 1. Function invocation: the scope is the global scope.
// 2. Method invocation: the scope is the scope of the object that is before the dot.
// 3. Constructor invocation: the scope is the scope of the constructor function.
// 4. Indirect invocation: the scope is the scope of the object that is passed as the first argument to call or apply.

// ? 2.Function Invocation

// Function invocation is the most common way to invoke a function.
//  It is also the most straightforward way to invoke a function.
//  The function is invoked as a function, not as a method of an object.

// The context of a function invocation is the global object (window in browser).
//  The scope of a function invocation is the global scope.

// *Example 1: Function invocation
// function foo() {
//   console.log(this); // window
// }
// foo();

// *Example 2: IIFE
// const message = (function (name) {
//   return "Hello " + name + "!";
// })("World");

// ! ++2.1++ this is the global object in a function invocation.
// ! The global object is determined by the execution environment.
// ! In a browser, the global object is window object.

// *Example 3: this is the global object in a function invocation

class sum {
  constructor(a, b) {
    console.log(this === global); // => true
    this.myNumber = 20; // add 'myNumber' property to global object
    return a + b;
  }
}
// sum() is invoked as a function
// this in sum() is a global object (window)
sum(15, 16); // => 31
global.myNumber; // => 20

// At the time sum(15, 16) is called, JavaScript automatically sets this as
//  the global object (window in a browser).

// When this is used outside of any function scope (the topmost scope: global execution context),
//  it also equals to the global object:

console.log(this === window); // => true
this.myString = "Hello World!";
console.log(window.myString); // => 'Hello World!'

// ++2.2++ this is not bound to the function itself.
// this is bound to the object that invokes the function.

// ! ++2.2++ this in a function invocation, strict mode

// In strict mode, this is undefined in a function invocation.
//  In non-strict mode, this is the global object.

// *Example 4: this in a function invocation, strict mode
function multiply(a, b) {
  "use strict"; // enable the strict mode
  console.log(this === undefined); // => true
  return a * b;
}
// multiply() function invocation with strict mode enabled
// this in multiply() is undefined
multiply(2, 5); // => 10

// *Example 5: this in a function invocation, strict mode, inner scopes

// The strict mode is active not only in the current scope but also in the inner
// scopes (for all functions declared inside):

function execute() {
  "use strict";
  function concat(str1, str2) {
    // the strict mode is enabled too
    console.log(this === undefined); // => true
    return str1 + str2;
  }
  // concat() is invoked as a function in strict mode
  // this in concat() is undefined
  concat("Hello", " World!"); // => "Hello World!"
}
execute();

//   ! ++2.3++ Pitfall: this in an inner function

// ⚠️ A common trap with the function invocation is thinking that this is the same in an inner
//  function as in the outer function.

// 👍 The context of the inner function (except arrow function) depends only on its own invocation type,
//  but not on the outer function's context.

const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(this === numbers); // => true
    function calculate() {
      // this is window or undefined in strict mode
      console.log(this === numbers); // => false
      return this.numberA + this.numberB;
    }
    return calculate();
  },
};
numbers.sum();

// ⚠️ numbers.sum() is a method invocation on an object (see 3.) thus this equals numbers. calculate() function is
//  defined inside sum(), so you might expect to have this as numbers object when invoking calculate() too.

// calculate() is a function invocation (but not method invocation), thus here this is the global object
//  window (case 2.1.) or undefined in strict mode (case 2.2.). Even if the outer function numbers.sum() has the context
//  as numbers object, it doesn't have influence here.

// The invocation result of numbers.sum() is NaN (or an error is thrown TypeError: Cannot read property 'numberA'
//  of undefined in strict mode). Definitely not the expected result 5 + 10 = 15. All because calculate() is not invoked
//  correctly.

// 👍To solve the problem, calculate() function must execute with the same context as the numbers.sum()
//  method, to access this.numberA and this.numberB properties.
// One solution is to change manually the context of calculate() to the desired one by calling calculate.call(this)
// (an indirect invocation of a function, see section 5.):

const numbers2 = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(this === numbers); // => true
    function calculate() {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    }
    // use .call() method to modify the context
    return calculate.call(this);
  },
};
numbers2.sum(); // => 15

// calculate.call(this) executes calculate() function as usual, but additionally modifies the context to a value
// specified as the first parameter.

// Now this.numberA + this.numberB is same as numbers.numberA + numbers.numberB. The function returns the expected
//  result 5 + 10 = 15.

// Another solution, slightly better, is to use an arrow function:

const numbers3 = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(this === numbers); // => true
    const calculate = () => {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    };
    return calculate();
  },
};
numbers3.sum(); // => 15

// The arrow function resolves this lexically, or, in other words, uses this value of numbers.sum() method.

// ? 3 Method Invocation

// Method invocation is the invocation of a function as a method of an object.

const myObject = {
  // helloMethod is a method
  helloMethod: function () {
    return "Hello World!";
  },
};
const message = myObject.helloMethod();

//  ! ++3.1++ this in a method invocation

// this is the object that owns the method in a method invocation

// *Example 6: this in a method invocation

const calc = {
  num: 0,
  increment() {
    console.log(this === calc); // => true
    this.num += 1;
    return this.num;
  },
};
// method invocation. this is calc
calc.increment(); // => 1
calc.increment(); // => 2

// *Example 7: this with prototype inheritence

const myDog = Object.create({
  sayName() {
    console.log(this === myDog); // => true
    return this.name;
  },
});
myDog.name = "Milo";
// method invocation. this is myDog
myDog.sayName(); // => 'Milo'

// Object.create() creates a new object myDog and sets its prototype from the first argument.
//  myDog object inherits sayName method.
// When myDog.sayName() is executed, myDog is the context of invocation.

class Planet {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this === earth); // => true
    return this.name;
  }
}
const earth = new Planet("Earth");
// method invocation. the context is earth
earth.getName(); // => 'Earth'

// ! ++3.2++ Pitfalls: seperating method from its object

// ⚠️ A method can be extracted from an object into a separated variable const alone = myObj.myMethod.
//  When the method is called alone alone(), detached from the original object, you might think that this is
//  the object myObject on which the method was defined.

// 👍 Correctly if the method is called without an object, then a function invocation happens, where
//  this is the global object window or undefined in strict mode.

function Pet(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function () {
    console.log(this === myCat); // => false
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat = new Pet("Cat", 4);
// logs "The undefined has undefined legs"
// or throws a TypeError in strict mode
setTimeout(myCat.logInfo, 1000);

// ⚠️ You might think that setTimeout(myCat.logInfo, 1000) will call the myCat.logInfo(), which should log
//  the information about myCat object.

// Unfortunately the method is separated from its object when passed as a parameter: setTimeout(myCat.logInfo).
// The following cases are equivalent:

setTimeout(myCat.logInfo);
// is equivalent to:
const extractedLogInfo = myCat.logInfo;
setTimeout(extractedLogInfo);

// When the separated logInfo is invoked as a function, this is global object or undefined in strict mode
// (but not myCat object). So the object information does not log correctly.

// 👍 A function bounds with an object using .bind() method (see 6.). If the separated method is bound
//  with myCat object, the context problem is solved:

function Pet2(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function () {
    console.log(this === myCat); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat2 = new Pet2("Cat", 4);
// Create a bound function
const boundLogInfo = myCat2.logInfo.bind(myCat2);
// logs "The Cat has 4 legs"
setTimeout(boundLogInfo, 1000);

// myCat2.logInfo.bind(myCat) returns a new function that executes exactly like logInfo, but has this as
// myCat, even in a function invocation.

// An alternative solution is to define logInfo() method as an arrow function, which binds this lexically:

function Pet3(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = () => {
    console.log(this === myCat); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat3 = new Pet3("Cat", 4);
// logs "The Cat has 4 legs"
setTimeout(myCat3.logInfo, 1000);

// If you'd like to use classes and bind this to the class instance in your method, use the arrow function as a class property:

class Pet4 {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  logInfo = () => {
    console.log(this === myCat); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat4 = new Pet4("Cat", 4);
// logs "The Cat has 4 legs"
setTimeout(myCat4.logInfo, 1000);

// ? 4 Constructor Invocation

// Constructor invocation is the invocation of a function with the new keyword.

// *Example 8: constructor invocation

class City {
  constructor(name, traveled) {
    // 1. A new object is created
    // 2. The new object is set as the this value
    this.name = name;
    this.traveled = false;
  }

  // 3. The new object is returned from the class

  travel() {
    this.traveled = true;
  }
}
// Constructor invocation
// this is the new object
const paris = new City("Paris", false);
paris.travel();

// When a function is invoked with the new keyword, the following steps happen:

// 1. A new object is created.
// 2. The new object is set as the this value.
// 3. The new object is returned from the function.

//  ! ++4.1++ this in a method invocation
//  this is the newly created object in a constructor invocation

// *Example 9: this in a constructor invocation

function Foo() {
  // this is fooInstance
  this.property = "Default Value";
}
// Constructor invocation
const fooInstance = new Foo();
fooInstance.property; // => 'Default Value'

//  new Foo() is making a constructor call where the context is fooInstance. Inside Foo the object is initialized:
//  this.property is assigned with a default value.

// The same scenario happens when using class syntax (available in ES2015), only the initialization happens in the
// constructor method:

class Bar {
  constructor() {
    // this is barInstance
    this.property = "Default Value";
  }
}
// Constructor invocation
const barInstance = new Bar();
barInstance.property; // => 'Default Value'

// ! ++4.2++ Pitfalls: forgetting about new

// Some JavaScript functions create instances not only when invoked as constructors,
// but also when invoked as functions. For example RegExp:

const reg1 = new RegExp("\\w+");
const reg2 = RegExp("\\w+");
reg1 instanceof RegExp; // => true
reg2 instanceof RegExp; // => true
reg1.source === reg2.source; // => true

// When executing new RegExp('\\w+') and RegExp('\\w+'), JavaScript creates equivalent regular expression objects.

// ⚠️ Using a function invocation to create objects is a potential problem (excluding factory pattern),
//  because some constructors may omit the logic to initialize the object when new keyword is missing.

// The following example illustrates the problem:

function Vehicle(type, wheelsCount) {
  this.type = type;
  this.wheelsCount = wheelsCount;
  return this;
}
// Function invocation
const car = Vehicle("Car", 4);
car.type; // => 'Car'
car.wheelsCount; // => 4
car === window; // => true, This is and error, this should be car, not window

// 👍 Make sure to use new operator in cases when a constructor call is expected:

function Vehicle(type, wheelsCount) {
  if (!(this instanceof Vehicle)) {
    throw Error("Error: Incorrect invocation");
  }
  this.type = type;
  this.wheelsCount = wheelsCount;
  return this;
}

// Constructor invocation
const car2 = new Vehicle("Car", 4);
car2.type; // => 'Car'
car2.wheelsCount; // => 4
car2 instanceof Vehicle; // => true

// Function invocation. Throws an error.
const brokenCar = Vehicle("Broken Car", 3);

// ? 5 Indirect Invocation
// Indirect invocation is performed when a function is called using myFun.call() or myFun.apply() methods.

// Functions in JavaScript are first-class objects, which means that a function is an object.
//  The type of function object is Function.

// From the list of methods that a function object has, .call() and .apply()
//  are used to invoke the function with a configurable context.

// myFunction.call(thisArg, arg1, arg2, ...) accepts the first argument thisArg as the context of
//  the invocation and a list of arguments arg1, args2, ... that are passed as arguments to the called function.

// myFunction.apply(thisArg, [arg1, arg2, ...]) accepts the first argument thisArg as the context of the
//  invocation and an array of arguments [arg1, args, ...] that are passed as arguments to the called function.

function sum(number1, number2) {
  return number1 + number2;
}
sum.call(undefined, 10, 2); // => 12
sum.apply(undefined, [10, 2]); // => 12

// ! 5.1. this in an indirect invocation
// this is the first argument of .call() or .apply() in an indirect invocation

// this in indirect invocation is the value passed as first argument to .call() or .apply().

const rabbit = { name: "White Rabbit" };

function concatName(string) {
  console.log(this === rabbit); // => true
  return string + this.name;
}
// Indirect invocations
concatName.call(rabbit, "Hello "); // => 'Hello White Rabbit'
concatName.apply(rabbit, ["Bye "]); // => 'Bye White Rabbit'

// The indirect invocation is useful when a function should be executed with a specific context.
// For example, to solve the context problems with function invocation, where this is always window or
// undefined in strict mode (see 2.3.). It can be used to simulate a method call on an object

// ? 6 Bound Functions

// A bound function is a function whose context and/or arguments are bound to specific values.
// You create a bound function using .bind() method. The original and bound functions share the same code and scope,
// but different contexts and arguments on execution.

// myFunc.bind(thisArg[, arg1, arg2, ...) accepts the first argument thisArg as the context and an optional list of
//  arguments arg1, arg2, ... to bound to. .bind() returns a new function which context is bound to thisArg and arguments to
//  arg1, arg2, ....

// The following code creates a bound function and later invokes it:

function multiply(number) {
  "use strict";
  return this * number;
}
// create a bound function with context
const double = multiply.bind(2);
// invoke the bound function
double(3); // => 6
double(10); // => 20

// multiply.bind(2) returns a new function object double, which is bound with number 2. multiply and double have the same code and scope.

// Contrary to .apply() and .call() methods (see 5.), which invoke the function right away, the .bind() method only
// returns a new function supposed to be invoked later with a pre-defined this value.

// !6.1 this inside a bound function

// this is the first argument of myFunc.bind(thisArg) when invoking a bound function

// The role of .bind() is to create a new function, which invocation will have the context as the first argument passed to
//  .bind(). It is a powerful technique that allows creating functions with a predefined this value.

const numbers = {
  array: [3, 5, 10],
  getNumbers() {
    return this.array;
  },
};

// Create a bound function
const boundGetNumbers = numbers.getNumbers.bind(numbers);
console.log(boundGetNumbers());

// Extract method from object
const simpleGetNumbers = numbers.getNumbers;
console.log(simpleGetNumbers()); // => undefined or throws an error in strict mode

// ! 6.2 Tight Context Binding

// .bind() makes a permanent context link and will always keep it.
//  A bound function cannot change its linked context when using .call() or .apply() with a
// different context or even a rebound doesn't have any effect.

// Only the constructor invocation of a bound function can change an already bound context,
// but this is not something you would normally do (constructor invocation must use regular, non-bound functions).

// The following example creates a bound function, then tries to change its already pre-defined context:

function getThis() {
  "use strict";
  return this;
}
const one = getThis.bind(1);
one(); // => 1
one.call(2); // => 1
one.apply(2); // => 1
one.bind(2)(); // => 1
new one(); // => Object

// ? 7 Arrow Functions

// Arrow function is designed to declare the function in a shorter form and lexically bind the context.
const hello = (name) => {
  return "Hello " + name;
};
hello("World"); // => 'Hello World'

// Arrow functions are anonymous functions, so they cannot be named. They are always assigned to a variable.

// ! 7.01 Arrow functions and arguments

// Also it doesn't provide the arguments object, opposed to a regular function. The missing arguments
//  is fixed using ES2015 rest parameters:

const sumArguments = (...args) => {
  console.log(typeof arguments); // => 'undefined'
  return args.reduce((result, item) => result + item);
};
sumArguments.name; // => ''
sumArguments(5, 5, 6); // => 16

// ! 7.1 this in arrow functions
// this is the enclosing context where the arrow function is defined

// The arrow function doesn't create its own execution context but takes this from the outer function where it
//  is defined. In other words, the arrow function resolves this lexically.

// *Example 10: this in arrow functions
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  log() {
    console.log(this === myPoint); // => true
    setTimeout(() => {
      console.log(this === myPoint); // => true
      console.log(this.x + ":" + this.y); // => '95:165'
    }, 1000);
  }
}
const myPoint = new Point(95, 165);
myPoint.log();

// setTimeout() calls the arrow function with the same context (myPoint object) as the log() method.
//  As seen, the arrow function "inherits" the context from the function where it is defined.

// *Example 11: this in arrow functions
// If the arrow function is defined in the topmost scope (outside any function), the context is always
//  the global object (window in a browser):

const getContext = () => {
  console.log(this === window); // => true
  return this;
};
console.log(getContext() === window); // => true

// ! ++7.2++ Pitfalls: defining method with an arrow function

// ⚠️ You might want to use arrow functions to declare methods on an object.
//  Fair enough: their declaration is quite short comparing to a function expression:
//  (param) => {...} instead of function(param) {..}.

// This example defines a method format() on a class Period using an arrow function:

function Period(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}
Period.prototype.format = () => {
  console.log(this === window); // => true
  return this.hours + " hours and " + this.minutes + " minutes";
};
const walkPeriod = new Period(2, 30);
walkPeriod.format(); // => 'undefined hours and undefined minutes'

// Since format is an arrow function and is defined in the global context (topmost scope),
//  it has this as window object.

// Even if format is executed as a method on an object walkPeriod.format(), window is
// kept as the context of invocation. It happens because the arrow function has a static
// context that doesn't change on different invocation types.

// The method returns 'undefined hours and undefined minutes', which is not the expected result.

// 👍 The function expression solves the problem because a regular function does change its
//  context depending on invocation:

function Period2(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}
Period2.prototype.format = function () {
  console.log(this === walkPeriod2); // => true
  return this.hours + " hours and " + this.minutes + " minutes";
};
const walkPeriod2 = new Period2(2, 30);
walkPeriod2.format(); // => '2 hours and 30 minutes'

// ? 8 Conclusion

// Because the function invocation has the biggest impact on this, from now on do not ask yourself:

// WHERE IS THIS TAKES FROM?

// but do ask yourself:

// HOW IS THE *`function invoked*?

// For an arrow function ask yourself:

// What is this inside the outer function where the arrow function is defined?

// This mindset is correct when dealing with this and will save you from the headache.

// 1. Function Invocation - *this* equals global/strict mode changes *this* to undefined
// 2. Method Invocation - *this* equals the object
// 3. Constructor Invocation - *this* equals the instance
// 4. Indirect Invocation(call,apply,bind) - *this* equals the context of the desired object
// 5. Arrow Functions - *this* equals the outer context
