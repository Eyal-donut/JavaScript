arr = ["dog", "cat", "hi"];

Array.prototype.myFilter = function (callBack) {
  let result = [];
  this.forEach(function (element, idx, arr) {
    if (callBack(element, idx, arr)) {
      result.push(element);
    }
  });
  return result;
};

console.log(arr.myFilter((word) => arr.indexOf(word) > 0));

Array.prototype.myFind = function (callback) {
  let result = null;
  this.forEach(function (element, idx, arr) {
    if (callback(element, idx, arr) && result == null) {
      return (result = element);
    }
  });
  return result;
};

console.log(arr.myFind((word) => arr.indexOf(word) > 0));

numArray = [1, 2, 5];

Array.prototype.myReduce = function (callBack, initialValue) {
  let accumulator = initialValue;
  let i = 0;
  if (!accumulator) {
    accumulator = this[0];
    i = 1;
  }
  for (; i < this.length; ++i) {
    accumulator = callBack(accumulator, this[i], i, this);
  }
  return accumulator;
};
console.log(numArray.myReduce((acc, curr) => acc * curr));
