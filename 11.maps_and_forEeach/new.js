//Q3
testArray = [
    9,
    'waf',
    102,
    'bro',
    'dude',
    10
]

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