// JavaScript has 21 levels of operator precedence. You can check them out
// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table.
// The table shows the operator, the usage of the symbol, which direction we should
// read the operation and the precedence from highest (21) to the lowest (1) precedence.

// The following code is an example of how to use the precedence of operators.
// The code is not meant to be executed, but to show how the precedence works.

// !EX 1

console.log((3 + 10) * 2);
// 26

console.log(3 + (10 * 2) / 2);
// 13

// !EX 2

console.log(3 - 5 * 10);

// The subtraction operator is shown first, but the multiplication is evaluated first.
// The multiplication operator has a higher precedence level over the subtraction operator.
// The associativity here does not matter—the subtraction operator will always be evaluated later.

// 8/4*2 => (8/4)*2 => 2*2 = 4
// 8/4*2 => 8/(4*2) => 8/8 = 1

console.log((8 / 4) * 2);
// 4

//? When there are operators of the same precedence, associativity affects
//? the process of the operation whether processing it from right-to-left or left-to-right.

// !EX 3
// !Left-To-Right

// (10+20)+30 → 10+20+30

// This is left-to-right associativity. We use it in every aspect of our lives when we use numbers. In this example, we will always get the same result no matter what because addition is associative.

// An associative operation is a calculation that will always return the same result no matter how the numbers are grouped. Multiplication is also associative, while subtraction and division are not.

// !EX 4
// the following operations are associative because they always return the same result:

// 10 + (10 + 2)
// (10 + 10) + 2

// The following operations are not associative because the way the numbers are grouped affects the result:

// 5-(4-3)
// (5-4)-3

// !EX 5
// !Right-To-Left

// 10+20+30 → 10+(20+30)

// This is right-to-left associativity. We use it in every aspect of our lives when we use numbers. In this example, we will always get the same result no matter what because addition is associative.

// Assignmetn operators always have right-to-left associativity

// !EX 5-A

// let a,b,c;

// a = b = c = 5;
// console.log(a, b, c)

// The above code is equivalent to:

// c = 5;
// b = c;
// a = b;

// !EX 5-B

// q = a?b:c?d:e?f:g; => q = a?b:(c?d:(e?f:g));

// !EX 6
// !Grouping

// Grouping is the operator with highest precedence. JavaScript developers in general use parentheses to control the order of the operation. Since grouping has the highest precedence, they are always calculated first.

// 2+8+9+(10-5)
// (2+2) + ((9-5) - 2)

// Groupings are almost always evaluated first, but sometimes this is not true. When we have a conditional evaluation, grouping might not even be evaluated.

// let a = true;
// let b = 10;
// let c = 20;

// The following code will not evaluate the grouping because the conditional evaluation will be evaluated first.

console.log(a && b + c);

// The following code will evaluate the grouping because the conditional evaluation will be evaluated first.

// a || console.log("Hello");

// In case the a value is false, the grouping expression (b + c) will never be evaluated. This is called short-circuiting.

// !EX 7
// !Short-Circuiting/Logical Operators

// Short-circuiting is a way to evaluate expressions that are not always evaluated. This is a way to optimize the code and avoid unnecessary evaluations.

// Short-circuit means that inside an OR operation, in case the first operand is true, JavaScript will never look at the second operand.

// In case the first operand is false, JavaScript will look at the second operand.

// if (20 === number || 10 === number) return true;

// We have four logical operators in JavaScript, each one of these operators also has its precedence number:

// !EX 8
// !Logical Operators

// ! — NOT
// && — AND
// || — OR
// ?? — Nullish Coalescing

// They’re always evaluated from left to right and the operator with higher precedence is the logical NOT (!) operator.

// !EX 9
// ! Logical NOT(!)

// const bool = true;

// if (!bool) {
//   console.log("false!");
// } else {
//   console.log("true!");
// }

// 'true!'

// const arr = ["operator", "precedence"];

// if (!arr) {
//   console.log("false!");
// } else {
//   console.log("true!");
// }

// 'true!'

// const highQuality = "";

// console.log(!highQuality);

// !EX 10 Logical AND (&&)
// The logical AND (&&) returns true if a set of operands are true and returns false otherwise

// const bool = true;
// const arr = ["operator", "precedence"];

// if (arr && bool) {
//   console.log("true!");
// } else {
//   console.log("false!");
// }

// 'true!'

// if (arr && bool && 1 > 2) {
//   console.log("true!");
// } else {
//   console.log("false!");
// }

// 'false!'

// const highQuality = true;
// const lowPrice = "Bob";

// console.log(highQuality && lowPrice);

// !EX 11 Logical OR (||)
// The logical OR (||) returns true if at least one of the operands is true and returns false otherwise.

// const bool = true;
// const arr = ["operator", "precedence"];

// if (arr || 1>2) {
//   console.log("true!");
// } else {
//   console.log("false!");
// }

// 'true!'

// if (2>3 || 1 > 2) {
//   console.log("true!");
// } else {
//   console.log("false!");
// }

// 'false!'

// const highQuality = "Bob";
// const lowPrice = "";

// console.log(highQuality || lowPrice);

// !EX 12 Nullish Coalescing (??)
// The nullish coalescing operator (??) returns the first operand if it is not null or undefined and the second operand otherwise.

// const bool = null ?? true;
// console.log(bool);
// 'true'

// const boool = 1 ?? true;
// console.log(boool);
// '1'

// const a = null;
// const b = 0;
// const c = 1;

// console.log(a ?? b ?? c);
// 0
