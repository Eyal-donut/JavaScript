const testArray = [1, 5, 88, 8, 20, 49];

const maxValueOfArray = (arr) => arr.reduce((max, current) => {
    if (current > max) {
        return current;
    } else {return max}
})
console.log(maxValueOfArray(testArray));

//another way of writing
const maxVal2 = (arr) => arr.reduce((max, current) => Math.max(max, current));
console.log(maxVal2(testArray));

const sumOfEvens = (arr) => arr.reduce((sum, current) => {
    if (current % 2 === 0) {
        return sum + current;
    } else {
        return sum;
    }
}, 0)
console.log(sumOfEvens(testArray));

// Average - long way
//  const calcAvg = (arr) => {
//      const sumOfArray = arr.reduce((sum, current) => (sum + current), 0)
//      return Number((sumOfArray/arr.length).toFixed(2))
//  }
//  console.log(calcAvg(testArray));

const calcAvg = (arr) => Number((arr.reduce((sum, current) => (sum + current), 0)/arr.length).toFixed(2))
console.log(calcAvg(testArray));

