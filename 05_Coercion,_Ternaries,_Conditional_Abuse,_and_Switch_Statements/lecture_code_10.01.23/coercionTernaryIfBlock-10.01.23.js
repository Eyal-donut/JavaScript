// !COERCION

// So far, we have learned that if you only need to use bang operator !, that checks for the opposite.

const isCool = true;

if (isCool) {
} else {
  console.log("You are not cool");
}

// In the situation where you are only ever using the else,
//  that is because you want the opposite of a value.

// If you are using the else, you are using the bang operator

if (!isCool) {
  console.log("You are not cool");
}

//   A bang in front of a boolean will always flip it.
// So if isCool = true, then !isCool would evaluate to false.

console.log(isCool);
console.log(!isCool);

// Coercion is when you force something that is of a different type, such as a string or number,
//  or an object or anything like that and force it into another type.
//   For example when we coerce something into a true boolean.

//   We can coerce a string into a number.

const age = Number("45");
console.log(age);

//   We can coerce a number into a string.

const age2 = String(45);
console.log(age2);

//   We can coerce a number into a boolean.

const age3 = Boolean(45);
console.log(age3);

// const name = "Shelly";

// console.log(!name);

// If you type !name in the console, it should return false.

// You will notice that !name took the string and turned it into a boolean
// by putting the bang in front of it.

const name = "";

console.log(!!name);

// Coercion in general is the act of changing one type into another.

//! TERNARY

// They are helpful when you quickly want to run functionality based on something being true or false.

// A ternary needs 3 things:

// 1. A condition
// 2. What to do if it' true
// 3. What to do if it's false.

// !EX 1 - if else

// const count = 2;
// let word;

// if (count === 1) {
//   word = "item";
// } else {
//   word = "items";
// }

// const sentence = `You have ${count} ${word} in your cart`;
// console.log(sentence);

// If you changes count to be 1, it would return the following sentence;

// The if statement that you wrote above is a bit verbose..
// you first have to declare an empty variable and then update it.
// What we can do, if it's a simple if else like in this example,
// you can turn it into a shorthand if statement with ternary.

// !EX 2 - ternary

// Like we mentioned above, for a ternary statement, we need one condition,
//  then we need what to do if that condition is true, and what to do if that condition is false.

// !EX 2-A
// const word = count === 1 ? "item" : "items";

// !EX 2-B
// const count = 0;
// const word = count === 1 ? "item" : "items";
// const sentence = `You have ${count} ${word} in your cart`;
// console.log(sentence);

// !EX 2-C
// const count = 0;
// const word = count === 1 ? 'item' : 'items';
// const sentence = `You have ${count} item${count === 1 ? '' : 's'} in your cart`;
// console.log(sentence);

// !EX 2-D
const count = 1;
console.log(`You have ${count} ${count === 1 ? "item" : "items"} in your cart`);

// !EX 3

showAdminBar = () => {
  console.log("Showing admin bar");
};

const isAdmin = true;

isAdmin ? showAdminBar() : null;

// !EX 3-A

showAdminBar = () => {
  console.log("Showing admin bar");
};

hideAdminBar = () => {
  console.log("Hiding admin bar");
};

// const isAdmin = true;

isAdmin ? showAdminBar() : hideAdminBar();

// !EX 3-B

// It is important to note that both what happens when it's true and when it's
//  false needs to be there for a ternary statement.

// isAdmin ? showAdminBar();

// !EX 3-C

// If you want to do something when it's true, but not when it's false,
//  you can use the bang operator.

isAdmin ? showAdminBar() : null;
isAdmin && showAdminBar();

// !Blockless If Statement

if (isAdmin) {
    showAdminBar();
  }

//   ↓

if (isAdmin) showAdminBar();

//   ↓

//! NOT VALID 
if (isAdmin)
showAdminBar();
