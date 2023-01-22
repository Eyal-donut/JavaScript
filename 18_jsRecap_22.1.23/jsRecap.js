// !Data Types in Javascript

// Primitives are the most basic in-built structures. In fact, they are represented at the
// lowest level of JavaScript implementation. Moreover, they are not objects.
// Thus, they don’t have methods or properties.

// Primitive data are immutable which means that they cannot be changed.
//  However, make sure to not confuse a primitive itself with a variable assigned a primitive
//  value ( A variable could be reassigned to a new value).

// Either way, the important lesson here is that you can access a primitive value in a
//  similar way to how you access non-primitive values, but you can’t change (mutate) it.
//  That’s the big difference (access vs. mutate).

// In JavaScript, primitive values are read-only, whereas non-primitive values
//  (objects/arrays, functions) are both read & write.

// !EX-1

let person = "Ernold";

console.log(person[0]);

person[0] = "A";

// console.log(first);

// ? Seven primitve data types in js are:

// *string
// *number
// *boolean
// *null
// *undefined
// *symbol
// *bigint

// string: a sequence of characters representing a text - surrounded by single (') or double (") quotes
console.log("I am a text");
console.log("I am another text");

// number: a number (integer or floating point)
console.log(100);
console.log(3.14);

// boolean: a logical entity that can have two values: true or false
console.log(true);
console.log(false);

// null: a special keyword denoting a null value
console.log(null);

// undefined: a top-level property whose value is not defined
let foo;
console.log(foo);

// symbol: data type whose instances are unique and immutable
console.log(Symbol("a") === Symbol("a")); //output: false - even though the two symbols are created with th same string 'a'

// bigint: any large number. it exceeds the safe integer limit for numbers (Number.MAX_SAFE_INTEGER)
// created by appending n at the end of the number
console.log(90071992547409910n);
console.log(Number.MAX_SAFE_INTEGER);

// !Objects
// Objects, on the other hand, can be seen as a collection of properties.
// In other words, an object in JavaScript is a collection of key-value pairs.
// You can set a property value to any type of data (Primitive or even objects).
// Indeed, this allows you to create more complex data structures.

// !EX-2

var person = {
  name: "Flavio",
  familyName: "Rochas",
  age: 34,
  contact: {
    phoneNum: "0660000000",
    address: "Via Costeira, 11/90, Sao Paulo, Brazil",
  },
};

console.log(person.name);

console.log(person.contact.phoneNum);

// !EX-3

let person2 = Object.create(person);
// !Object.create is a shallow copy only, meaning, only the 1st layer of an object

let personKeys = Object.keys(person);
// !Object.keys returns an array of the keys of an object
console.log(personKeys);

let personValues = Object.values(person);
// !Object.values returns an array of the values of an object
console.log(personValues);

let personEntries = Object.entries(person);
// !Object.entries returns an array of the entries of an object
console.log(personEntries);

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// !Operators in Javascript

// Operators are used to perform operations on variables and values.

// In the example below, x is the variable, and = is the assignment operator.

// x = y + z; // x = 5 + 2

// JavaScript divides the operators in the following groups:

// *Assignment operators
// *Arithmetic operators
// *Comparison operators
// *Logical operators
// *Bitwise operators
// *String operators
// *Conditional (ternary) operator
// *Comma operator
// *Unary operators
// *Relational operators

// !Assignment Operators

// Assignment operators assign values to JavaScript variables.

// Example

let x = 5;
let y = 2;

// !Arithmetic Operators

// Arithmetic operators are used to perform arithmetic on numbers (literals or variables).

// Example

let x = 5;
let y = 2;
let z = x + y; // z = 7

// ? The arithmetic operators are:

// *Addition (+)
// *Subtraction (-)
// *Multiplication (*)
// *Division (/)
// *Remainder (%)
// *Exponentiation (**)
// *Increment (++)
// *Decrement (–)

// ? Associativity

// The associativity of an operator defines the order in which operations are performed:
// when there are several operators with the same precedence.

// The associativity of an operator can be:

// *Left-to-right (left associative)

// 8/4*2 => (8/4)*2 => 2*2 = 4

// *Right-to-left (right associative)

// x = y = z = 25;

// ? Precedence

// The precedence of an operator defines the order in which operations are performed:

// when several operators have the same associativity.

// !Comparison Operators

// Comparison operators are used in logical statements to determine equality or difference between variables or values.

// Example

let x = 5;
let y = 2;
let z = 8;

console.log(x > y); // true

console.log(x < y); // false

console.log(x >= y); // true

console.log(x <= y); // false

console.log(x == y); // false

console.log(x === y); // false

console.log(x != y); // true

console.log(x !== y); // true

// ? The comparison operators are:

// *Equal (==)
// *Equal value and equal type (===)
// *Not equal (!=)
// *Not equal value or not equal type (!==)

// *Greater than (>)
// *Greater than or equal to (>=)
// *Less than (<)
// *Less than or equal to (<=)

// !Logical Operators

// Logical operators are used to determine the logic between variables or values.

// Example

let x = 5;
let y = 2;
let z = 8;

console.log(x > 3 && x < 10); // true

console.log(x > 3 && x > 10); // false

console.log(x > 3 || x < 10); // true

console.log(x > 3 || x > 10); // true

console.log(!(x > y && x < z)); // false

// ? The logical operators are:

// *Logical and (&&) - Returns true if both operands are true

// *Logical or (||) - Returns true if one of the operands is true

// *Logical not (!) - Reverse the result, returns false if the result is true

// ? Short-circuit evaluation

// Logical expressions are evaluated from left to right.

// If the left operand can determine the result (without looking at the right operand), the right operand will not even be evaluated.

// This is called short-circuit evaluation.

// Example

let x = 6;
let y = 3;
let z = 1;
let variable = true;

console.log(variable && x + y);

// !Bitwise Operators

// Bitwise operators treat their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.

// Example

let x = 5; // 00000101

let y = 1; // 00000001

console.log(x & y); // 00000001

console.log(x | y); // 00000101

console.log(x ^ y); // 00000100

console.log(~x); // 11111010

console.log(x << 1); // 00001010

console.log(x >> 1); // 00000010

console.log(x >>> 1); // 00000010

// ? The bitwise operators are:

// *Bitwise AND (&)

// *Bitwise OR (|)

// *Bitwise XOR (^)

// *Bitwise NOT (~)

// *Left shift (<<)

// *Signed right shift (>>)

// *Unsigned right shift (>>>)

// !String Operators

// The + operator can be used to add (concatenate) strings.

// Example

let firstName = "Flavio";

let lastName = "Rochas";

let fullName = firstName + " " + lastName;

console.log(fullName);

// !Conditional (Ternary) Operator

// The conditional operator is the only JavaScript operator that takes three operands.

// This operator is frequently used as a shortcut for the if statement.

// Example

let x = 5;

let y = 2;

let z = x > y ? "x is greater than y" : "x is less than or equal to y";

console.log(z);

// !Comma Operator

// The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.

// Example

let x = 5;

let y = 2;

let z = (x++, y++);

console.log(z);

// !Unary Operators

// Unary operators are operators with only one operand.

// Example

let x = 5;

console.log(-x); // -5

console.log(+x); // 5

console.log(!x); // false

console.log(typeof x); // number

// ? The unary operators are:

// *Unary negation (-)

// *Unary plus (+)

// *Logical NOT (!)

// *Typeof

// !Variables in Javascript

// A variable is a container for a value, which can be of any type.

// Example

let x = 5;

let y = "Flavio Rochas";

let z = true;

// ? Variable names

// Variable names can contain letters, digits, underscores, and dollar signs.

// Variable names must begin with a letter.

// Variable names are case sensitive (y and Y are different variables).

// Example

let x = 5; // legal

let _x = 5; // legal

let $x = 5; // legal

let 1x = 5; // illegal

// ? Reserved words

// You cannot use reserved words as variable names.

// Example

let break = 5; // illegal

let case = 5; // illegal

let catch = 5; // illegal

let class = 5; // illegal

let const = 5; // illegal

let continue = 5; // illegal

let canBeChanged = "123";
const cannotBeChanged = true;

canBeChanged = "456";
console.log(canBeChanged); // output : "456"

cannotBeChanged = false; 

// When you use let to create your variable, you’re signalling to JavaScript that
// it can be changed (reassigned) along the time. Contradictorily, when you use the const keyword,
// the variable cannot be changed. Therefore, we’re getting an error on line 7 telling us that we 
// couldn’t assign a new value to the variable cannotBeChanged.

// !Variable hoisting

// Variable hoisting is JavaScript's default behavior of moving all declarations to the top
//  of the current scope (to the top of the current script or the current function).


// Example

console.log(x); // output : undefined
var x = 5;

console.log(y); // output : ReferenceError: y is not defined
let y = 5;

console.log(z); // output : ReferenceError: z is not defined
const z = 5;

// !Function hoisting

// Function hoisting is JavaScript's default behavior of moving all function declarations
//  to the top of the current scope.

// Example

console.log(x); // output : 5

function x() {
    console.log("Hello World!");
    }

// Only function declaration can be hoisted, function expression or arrow function cannot be hoisted

// !Control statement in JS

// Control statements are used to change the control flow of a program.

// ? Conditional statements

// You can use conditional statements to allow your program to execute a certain action according to
//  the truthfulness of a given condition. There’re multiple conditional statements in JavaScript.

    // “if statement”: executes the block of code if the given condition is truthy (evaluates to true).
    // “if…else statement”: executes the else block of code if the given condition is falsy (evaluates to false)
    // “else if statement”: starts a new test if the previous condition is false.
    // “switch statement”: the value of the evaluation of the switch expression is compared to a 
    // series of case statements. Then, the block of code of the first successful match will be executed. 

// !if/if..else/else if Statements Example

    // if...else 
const age = 20;
if(age >= 18){ // This block is going to be executed since 20 >= 18 evaluates to true
  console.log("You're allowed.");
}else {
  console.log("Sorry! You're not allowed.");
}

// else if 
const grade = "C";
if(grade === "A"){
  console.log("You're doing great");
}else if(grade === "B"){
  console.log("You're doing not bad");
}else if(grade === "C"){ // This block is executed since it evaluates to true
  console.log("You can do better");
}else {
  console.log("can't tell");
}

// !Switch Statement Example

const grade = "C";
switch (grade){
    case "A":
    	console.log("You're doing great");
    	break;
    case "B":
    	 console.log("You're doing not bad");
    	break;
    case "C": // this block is going to be executed since it matches the evaluation of the switch expression
    	console.log("You can do better");
    	break;
    default: // in case there's no match the default block is executed
    	console.log("Can't tell");
    	break;
}

// ? Iterative statements

// As a programmer, you might need to use loops in your programs to repeat an operation over and over again. So, a loop is a programming tool that repeats a block of code until a specific condition (often called a stopping condition) is met.

// In JavaScript, there’re different types of looping statements.

    // for statement: repeats until the stopping condition evaluates to false.
    // while statement: repeats as long as the condition is truthy.
    // do…while statement: the block of code executes at least once no matter before repeating it and testing over the condition.
    // for…in statement: iterates over all the properties of an object.
    // for…of statement: iterates over all the values of an iterable object.

    //! for/ while Statements Example

    // Objective: Want to print numbers from 0 to 10 to the console.

// First solution: using a for loop
for (let i = 0 /*initial expresion*/; i <= 10/*condition*/; i++/*increment expresion*/){
    console.log(i);
  }
  
  // Second solution: using a while loop
  let j=0;
  while(j <= 10){
    console.log(j);
    j++;
  }

// !do...while Statement Example

// Objective: Whistle once first, then clap five times after!

// Solution: using a do...while loop
let i=0;
do{
  if(i===0){
    console.log("Whistle");
  }else{
    console.log("Clap!");
  }
  i++;
}while(i<=5)

// !for…in/ for…of Statements Example

// Objective: list all the object's properties and their values.
const person = {
    name:'AB',
    age: '34',
    country: 'Algeria'
  }
  
  // Solution: using for...in loop
  for (const key in person){
    console.log(key + ' : ' + person[key]);
  }

  // Question: is it possible to use the for...of statement instead?

//  The answer is: no. Indeed, the for…of statement can be used only on iterable objects which
//  are generally arrays and all their variants

// Objective: list all the colors in the array "colors"
const colors = ['Black','White','Blue','Green','Red'];

// Solution: using a for...of statement
for( const color of colors){
  console.log(color);
}

// !Break/ Continue Statements Example

// Objective: print numbers from 0 to 10 to the console except 5.

// Solution: using a for loop

for (let i = 0; i <= 10; i++){
    if(i===5){
      continue;
    }
    console.log(i);
  }

// !Break Statement Example

// Objective: print numbers from 0 to 10 to the console until 5.

// Solution: using a for loop

for (let i = 0; i <= 10; i++){
    if(i===5){
      break;
    }
    console.log(i);
  }

// !Functions in JS

// A function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it).

// ? Function declaration

// A function declaration consists of the function keyword, followed by:

    // The name of the function.
    // A list of parameters to the function, enclosed in parentheses and separated by commas.
    // The JavaScript statements that define the function, enclosed in curly brackets, {...}.

    // Example

function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }

// ? Function expression

// A function expression is very similar to and has almost the same syntax as a function declaration (see above).
//  The main difference between a function expression and a function declaration is the function name, which can 
// be omitted in function expressions to create anonymous functions.

// Example

const square = function(number) { return number * number }

// Now, you might ask yourself, why would you use function expressions?

// Actually, one of the most useful cases to use a function expression is when you need to pass a function as a callback.
//  Let’s see the following example to illustrate this…

// function expession
const sayMyName = function (name){
    console.log(name);
  }
  
  // function declaration: taking an array of some people' names and the a callback to  say their names
  function saySomePeopleNames(people, cb){
    for(const person of people){
      cb(person);
    }
  }
  
  const ppl = ['AB', 'CD', 'EF'];
  // invoking the function
  saySomePeopleNames(ppl, sayMyName);


// ? Arrow functions

// Arrow functions, on the other hand, are a shorter version of function expressions.
//  However, they defer from them in two main ways: they are always anonymous, and they don’t have their own binding to this.

// Example

// function expession
const sayMyName2 =  (name) =>  console.log(name);

//invoking the function
sayMyName("AB");
sayMyName("CD");
sayMyName("EF");

// ? Function parameters

// A function can be invoked with any number of arguments, no matter how it was defined.

// Example

function myFunction(a, b) {
    return a * b;
  }

// ? Default parameters

// Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.

// Example

function multiply(a, b = 1) {
    return a * b;
  }

// ? Rest parameters

// Rest parameters, also written with three consecutive dots ( ... ),
//  allow you to represent an indefinite number of arguments as an array.

// Example

function multiply(multiplier, ...theArgs) {

    return theArgs.map(x => multiplier * x);
  }

  multiply()

// ? The arguments object

// The arguments object is an Array-like object corresponding to the arguments passed to a function.

// Example

function myFunction() {
    return arguments.length;
  }

// ? Function return

// A function can return any type of data, including a function.

// Example

function myFunction() {
    return function() { return 1; };
  }

  // ? forEach

  // he forEach method allows you to execute a function by iterating through each element of an array.
  //  It’s important to note that the forEach method doesn’t return anything, and thus,
  //  if you try to get the return value of the forEach method, you will get undefined.

// Example

//an array of numbers
let numberArray = [1, 2, 3, 4, 5];

//output the square of each number
let returnValue = numberArray.forEach(num => 
  console.log(`${num} x ${num} = ${num * num}`)
);

//the array hasn't changed
console.log(numberArray);
console.log(returnValue);

// !map

// The map method is very similar to the forEach method—it allows you to execute a function 
// for each element of an array. But the difference is that the map method creates a new array
//  using the return values of this function. map creates a new array by applying the callback
//  function on each element of the source array. Since map doesn't change the source array,
//  we can say that it’s an immutable method.

//an array of numbers
let numberArray = [1, 2, 3, 4, 5];

//output the square of each number
let returnValue = numberArray.map((num) => num * num)

//view the results
console.log(numberArray);
console.log(returnValue);

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// !Scope in Javascript

// In JavaScript, scope refers to the visibility (accessibility) of variables and functions in certain parts of the code.

// There are three different types of scopes in JavaScript: block scope, function( a.k.a local) scope, and global scope.

// Let’s have a look at the following example…

// !Global scope

// global variables
var a = 1;
let b = 2;
const c = 3;
//----------

function foo(){
	if(1){ // always true
      console.log(a);
    }
  console.log(b);
}

function bar(){
	foo();
}
console.log(c); // output: 1
bar(); // output: 1 2


// !Local scope

function foo(){
    //local variable
    var a = 'a';
    
    function bar(){
      console.log('Hi!');
    }
    
    if(1){ // always true
      console.log(a);
    }
    bar();
  }

  console.log(a)
  
  foo(); // output: a Hi!
  console.log(a); // Uncaught ReferenceError: a is not defined

//   !Block scope

//   Block scope is the scope of variables that are defined inside a block statement (curly braces).

//   Example

function foo(){
  
    if(1){ // always true
      // block scoped variables
      let a = 1;
      var b = 2;
      console.log(a);
      console.log(b);
    }
    
    console.log(b);
    console.log(a);
  }
  
  foo();
  /* output :
  1
  2
  2
  Uncaught ReferenceError: a is not defined
  */





  const string = 'Israel';
const myNumber = 6;
const obj = {};
const bool = true;
const nullValue = null;
let notDefined;
const mySymbol = Symbol('$');
// console.log(typeof string);
// console.log(typeof myNumber);
// console.log(typeof obj);
// console.log(typeof bool);
// console.log(typeof nullValue);
// console.log(typeof notDefined);
// console.log(typeof mySymbol);

// ! falsy value
// false
// 0
// -0
// 0n
// '', "", ``
// null
// undefined
// NaN
// document.all

//? '' === "" and `${js action}` → string
//? ===  check type as well
//? ==  without type checking
const num1 = 15.8545865415;
// console.log(num1.toFixed(8));

//? Math
// console.log(Math.PI);
// console.log(Math.min(30, 20));
// console.log(Math.max(30, 20));
// console.log(Math.random());
// console.log(Math.floor(num1));
// console.log(Math.pow(4, 3));

//? Date
const date = new Date();
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.toLocaleString());

//? Number
// console.log(Number('50'));
// console.log(parseInt('50 fsadfsd'));
// console.log('12' * 1);

//? if, else, else if
const x = 10;
if (x > 1) {
  if (x < 20) {
  }
} else {
}

//? ternary
//? condition ? true res : false res

//? && And, Or ||,  not !

//? &&

const arr = [
  {
    name: 'Erik',
    hobbies: ['programing', 'sport'],
  },
  {
    name: 'Bob',
  },
  {
    name: 'Dan',
    hobbies: ['programing'],
  },
];
// for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i].hobbies) {
//   console.log(arr[i].hobbies && arr[i].hobbies[0]);
//   //   }
// }
// console.log(('' || 20) && 30);

//? switch
// let color = 'brown';
// switch (color) {
//   case 'yellow':
//     console.log('yellow');
//     break;
//   case 'green':
//   case 'red':
//     console.log('green or red');
//     break;
//   default:
//     console.log('none of the above');
// }

const arr1 = ['one', 'two', 'three', 'four', 'five', 'six'];
// console.log(Array.isArray(arr1));

// for (let i = 0; i < arr1.length; i++) {
//   console.log(i);
// }

// for (let val of arr1) {
//   console.log(val);
// }

arr1.pop();

arr1.shift();

arr1.unshift('one');

arr1.push('six');

// console.log(arr1.indexOf('five'));

// console.log(
//   arr1.findIndex((element, index, arr) => {
//     console.log('index → ', index);
//     return element === 'two';
//   })
// );
const arr2 = [7, 8, 9];
const newArr = arr1.concat(arr2);
// console.log(newArr);

//? deconstructing
//? Arrays
const newArr2 = [arr1, ...arr2];
// console.log(newArr2);

//new instance of array - not mutate the original array
// const newSlice = arr2.slice(1, 2);

//Mutate the original array
arr2.splice(1, 1, 'Some', 'Some', 'Some');
// console.log(arr2);

//? Obj
const dan = {
  name: 'Dan',
  hobbies: [
    {
      // 158
      name: 'Erik',
      hobbies: ['programing', 'sport'],
    },
    {
      name: 'Bob',
    },
    {
      name: 'Dan',
      hobbies: ['programing'],
    },
  ],
};
const dani = { ...dan, name: 'Dani', age: 81 };

///↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// console.log(dani);

const obj3 = { name: 'Bob', age: 18, city: 'Haifa' };
for (let key in obj3) {
  //   console.log(key, ': ', obj3[key]);
}

const keysInObj3 = Object.keys(obj3);
const valuesInObj3 = Object.values(obj3);

const obj3AsArray = Object.entries(obj3);

// console.log(obj3AsArray);
for (let [key, val] of obj3AsArray) {
  //   console.log(val);
  // console.log(val[0], ': ', val[1]);
  console.log(key, ': ', val);
}

//? destructuring
const arr4 = ['one', 'two', 'three', 'four'];
let [second, first, third, fourth, ...rest] = arr4;
// let second = arr4[0];
// let first = arr4[1];
// let third = arr4[2];
// console.log(rest);

