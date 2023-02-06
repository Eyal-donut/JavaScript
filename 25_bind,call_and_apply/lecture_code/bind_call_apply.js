/*
  Here, the getX function is a method of the obj object, so when it is invoked as a method, this refers to obj and the function returns the value of obj.x. 
  However, when the getX function is invoked as a standalone function, this refers to the global object (or undefined in strict mode) and the function returns undefined. 
  To fix this, we use the bind() method to create a new function boundGetX that has obj as its context.
*/
let obj = {
  x: 10,
  getX: function () {
    return this.x;
  }
};

console.log(obj.getX()); // 10

let getX = obj.getX;
console.log(getX()); // Outputs: undefined

let boundGetX = getX.bind(obj);
console.log(boundGetX()); // Outputs: 10

// The bind() method creates a new function with the same body and parameters as the original function, but with the context of the object we passed to it.

/*
  Many JavaScript libraries and frameworks use callback functions to perform certain actions after an event has occurred. If you need to pass a callback function that uses a specific this value, you can use the bind() method to create a new function with the desired this value.
*/
function fetchData(url, callback) {
  // fetch data from the server
  callback.bind(this)();
}

fetchData("https://example.com", function () {
  console.log(`Data fetched from ${this.url}`);
});

/*
  When you need to pass a method of an object as a callback, you may want to make sure that the method is called with the correct this value. If you pass the method directly, it will lose the original this value. In this case, you can use the bind() method to create a new function that calls the original method with the desired this value.
*/

/*
  You can use the `bind()` method to create a new function that has some of its arguments pre-filled with specific values. This is called partial function application and can be useful for creating reusable utility functions.
*/
function add(a, b) {
  return a + b;
}
let addTen = add.bind(null, 10);
console.log(addTen(5)); // 15
/*
  In this example, we have a add function that takes two arguments and returns their sum. We use the bind() method to create a new function addTen, which has the first argument pre-filled with the value 10. Now, when we call addTen(5), it's equivalent to calling add(10, 5).
*/

  
/*
  Function currying: You can use the call() method to create a new function with some of its arguments pre-filled by passing them to the call() method, this is called Function currying, it's a technique to partially apply a function by pre-setting some of its arguments
*/
function add(a, b) {
  return a + b;
}
addTen = add.call(null, 10);
console.log(addTen(5)); // 15

/*
  In this example, we have a add function that takes two arguments and returns their sum. We use the call() method to create a new function addTen, which has the first argument pre-filled with the value 10. Now, when we call addTen(5), it's equivalent to calling add(10, 5). This technique is similar to the bind() method but with the difference that the bind() method returns a new function while the call() method call the function immediately.
*/

/*
  The main difference between bind() and call() in JavaScript is that bind() returns a new function with a specified this value and any number of arguments pre-filled, while call() immediately calls a function with a specified this value and any number of arguments.
  
  In other words, bind() returns a new function that, when called, has the this value set to the first argument passed to bind(), and any additional arguments passed to bind are pre-filled as the arguments to the returned function, while call() calls the function and sets the this value to the first argument passed to call(), and any additional arguments passed to call() are passed as the arguments to the called function.
*/

/*
  Here, the call() method is used to invoke the printX function with obj as its context. 
  As a result, this.x inside the function refers to obj.x and the function outputs 10.
*/
obj = { x: 10 };

function printX() {
  console.log(this.x);
}

printX.call(obj); // Outputs: 10

/*
  The call() method allows you to set the this value of a function when it is called. For example, you can use the call() method to call a method of one object on another object:
*/
person1 = { name: "John" };
person2 = { name: "Jane" };

function sayName() {
  console.log(`My name is ${this.name}`);
}

sayName.call(person1); // Output: "My name is John"
sayName.call(person2); // Output: "My name is Jane"

/*
  In this example, we are calling the same function sayName but with different this value, the first call uses person1 as this value and the second call uses person2 as this value.
*/

const car = { brand: "Toyota", model: "Camry" };
const bike = { brand: "Honda", model: "CBR" };

function displayFullName() {
  console.log(`The ${this.brand} ${this.model}`
  );
}

displayFullName.call(car); // Output: "The Toyota Camry"
displayFullName.call(bike); // Output: "The Honda CBR"

/*
  In this example, we have a function `displayFullName` which displays the brand and model of the vehicle. We can use this function for different objects by calling it with the `call()` method, passing different objects as the `this` value.
*/

/*
  You can use the `call()` method to borrow a method from one object and use it on another object:
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(Math.max.apply(null, array1)); // Output: 3
console.log(Math.max.apply(null, array2)); // Output: 6

/*
  In this example, we are using the Math.max method to find the maximum value in an array, but instead of defining the method on the array object, we are borrowing it from the Math object and using it on different arrays.
*/

/*
  The apply() method is similar to call(), but it accepts the arguments to the function as an array or an array like object.

  The apply() method is used to invoke the add function with obj as its context, and the array [5] as its arguments. The function returns the value of obj.x + 5 + 5, which is 15.
*/
obj = { x: 10 };

function add(z, y, w) {
  return this.x + z + y + w;
}
console.log(add.apply(obj, [5, 5, 5])); // Output: 25

/*
  In the example above, the apply() method is used to pass in the obj object and an array of 3 elements [5, 5, 5] as arguments to the add function. 
  The apply() method is called on the add function. 
  The first argument passed to the apply() method is the obj object, which is used as the this value within the add function. 
  The second argument passed to the apply() method is the array of 3 elements [5, 5, 5], which is used as the input to the add function.

  When you call add.apply(obj, [5, 5, 5]), JavaScript internally calls the add function with the individual elements of the array [5, 5, 5] as arguments, like this: add(5, 5, 5)
*/

// Define an object that behaves like an array
let arrayLikeObject = { 0: "first", 1: "second", 2: "third", length: 3 };

// Define a function that takes in an array as an argument
function printElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Use the apply() method to pass in the arrayLikeObject as an argument to the printElements function
printElements.apply(null, arrayLikeObject);
// Output: "first"
//         "second"
//         "third"

/*
  In this example, the arrayLikeObject is an object that has properties with indices similar to an array and a length property. It behaves like an array, but it's not an array.

  When calling the apply() method on the printElements function and passing the arrayLikeObject as the second argument, JavaScript will treat the arrayLikeObject as if it were an array, and pass its properties as separate arguments to the printElements function. Therefore, the printElements function will loop through the length of the arrayLikeObject object, and print the properties of the object.
*/


function myFunction() {
  // Create a new function that uses the arguments object
  let printArgs = function () {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }.bind(null, arguments);

  // Call the new function
  printArgs();
}

myFunction(1, 2, 3);
// Output: "1"
//         "2"
//         "3"

/*
  In this example, the myFunction is defined, and within it, a new function printArgs is defined, which uses the arguments object. The bind() method is called on the printArgs function, and the arguments object is passed as the first argument. The bind() method returns a new function, which when called, has its this value set to null, and is pre-initialized with the arguments object.

  Therefore, when we call the printArgs function, it uses the arguments object that we passed to the bind() method, and loops through its elements and print each one. This way, we can use the arguments object within a function that is bound to a different this value or pre-initialized with some other arguments, which can be useful in some cases.

  It's worth noting that, while it's possible to use the bind() method with an array-like object like the arguments, it's generally recommended to use an actual Array object instead, as it has a more predictable behavior and a wider range of built-in methods.
*/

/*
  the arguments keyword refers to an object that is available within the scope of any function. It behaves like an array, in that it has a length property and indexed elements, but it does not inherit from the Array prototype and does not have all of the built-in array methods, such as map() and filter().

  The arguments object contains all of the arguments passed to the function when it is called. It can be used to access the arguments passed to a function, even if the function was defined with a different number of parameters.  
*/

function myFunction(a, b) {
  console.log(arguments[0]); // Output: 1
  console.log(arguments[1]); // Output: 2
  console.log(arguments.length); // Output: 3
}

myFunction(1, 2, 3);

/*
  In this example, the myFunction is defined with two parameters a and b, but it is called with three arguments 1, 2, 3. The arguments object within the function allows us to access the three arguments passed to the function, even though the function was defined with only two parameters.

  Note that, although the arguments object looks like an array, it is not an array and it doesn't have all the array methods available. It's more like an array-like object, it has a length property and indexed elements but doesn't inherit from the Array prototype.

  It's worth noting that, in ECMAScript 6 (ES6) introduced the rest parameter, which is a more elegant way of handling letiable number of arguments passed to a function. It allows you to define a function with a letiable number of arguments using the ... syntax, and it creates an array that contains all the arguments passed to the function. This is a more elegant and efficient way of handling letiable number of arguments, instead of using the arguments object.
*/

function myFunction(a, b, ...args) {
  console.log(args); // Output: [3]
  console.log(args.length); // Output: 1
}
myFunction(1, 2, 3);


// In this case, you can use apply to implicitly "spread" an array as a series of arguments.
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);

/* 
  Here, we are using the apply method to call the fullName method of the person1 object and passing person2 as the first argument and an array ["New York", "USA"] as the second argument. This allows us to set the "this" value within the fullName method to the person2 object, so that the firstName and lastName properties of the person2 object are used within the method. The array ["New York", "USA"] is used to supply the city and country arguments to the fullName method.
  
  The output will be the string "John Doe, New York, USA" which is the concatenation of the properties of the person2 object and the elements of the array passed to the apply method.
*/
const person1 = {
  firstName: "Jane",
  lastName: "Smith",
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};

const person2 = {
  firstName: "John",
  lastName: "Doe"
};

console.log(person1.fullName.apply(person2, ["New York", "USA"])); // John Doe, New York, USA

// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
Math.max.apply(null, [1, 2, 3]); // Will return 3

/*
  In the above example, Math.max is a built-in function in JavaScript that returns the largest number in an array. In this case, we use the apply() method to call the function with the this value set to null (since it's not used in this function) and the array of arguments [1, 2, 3].
*/

// using the apply() method to call a function with the this value set to an object and an array of arguments:
obj = { name: "John" };
let func = function (a, b, c) {
  return this.name + " says " + a + ", " + b + ", " + c;
};
let args = ["hello", "world", "!"];
let result = func.apply(obj, args);
console.log(result); // "John says hello, world, !"

/*
  call() and apply() method can invoke the function with a given context and arguments.
*/
