// Create an object with a name property. The object should
// also have a method that prints its name and another method
// that prints its name after a second with the help of setTimeOut.
// in this exercise, you are not allowed to use arrow functions

obj = {
  name: "homer",
  printName() {
    console.log(this.name);
  },
  printWithTimeout() {
    setTimeout(function (){this.printName();}.bind(this), 3000);
  },
};

obj.printName()
obj.printWithTimeout()



