const numArray = [1, 4, 7, 10];
//Q1
function doubleValues(arr) {
  const doubles = arr.map(function (d) {
    return d * 2;
  });
  return doubles;
}
console.log(doubleValues(numArray));

//Q2
const onlyEvenValues = (arr) => {
  const evensArray = [];
  arr.forEach(function (num) {
    num % 2 === 0 ? evensArray.push(num) : "";
  });
  return evensArray;
};
console.log(onlyEvenValues(numArray)); 

//Q3
function showFirstAndLast(arr) {
  const firstLastArray = [];
  const mapArray = arr.map(function (arg, index) {
    if (typeof arg === 'string') {
    // if (index === 0 || index === arr.length - 1) {
      return firstLastArray.push(arg);
    }
  });
  return [firstLastArray[0], firstLastArray[firstLastArray.length - 1]];
}
console.log(showFirstAndLast(testArray)); 

//Q4
const testString = "Hello";

function vowelCount(str) {
  const arr = str.toLowerCase().split("");
    countObj = {};

    arr.forEach(function (char, index) {
        if (char === 'a' || char === 'o' || char === 'u' || char === 'e' || char === 'i') {
          countObj[char] = index;
        }
  });
  return countObj
}
console.log(vowelCount(testString)); 

//Q5
function capitalize(str) {
  charArray = str.split("");
  const mapArray = charArray.map(function (char) {
    return char.toUpperCase()
  });
  return mapArray.join("");
}
console.log(capitalize('bro')); 

//Q6
function shiftedLetters(str) {
  const arr = str.split("");
  const shiftedArray = arr.map(function (char) {
    return String.fromCharCode(char.charCodeAt(char) + 1);
  });
  const shiftedString = shiftedArray.join("");
  return shiftedString;
}
console.log(shiftedLetters('abc'))

//Q7
const testStr = "the boy ate poo";
const swapCaps = (str) => {
  const wordsArray = str.split(" ");
  const capsArray = []
  wordsArray.forEach(function (word, index) {
    if (index % 2 !== 0) {
      capsArray.push(word.toUpperCase());
    } else {
      capsArray.push(word)
    }
  });
  return capsArray.join(" ");
};
console.log(swapCaps(testStr));
