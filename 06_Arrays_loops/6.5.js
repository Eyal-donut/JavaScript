const objectsArray = Array(100).fill({});
// console.log(objectsArray)

const array1 = Array.from({length: 100}, (_, i) => i + 1);
// console.log(array1)

const favObject = {
    favFood: 'cake',

    favColor: 'green'
};
const favObjectValues = Object.values(favObject)
// console.log(favObjectValues)

const objFromArray = Object.assign({}, ['a','b', 'c']);
// console.log(objFromArray)

const testArray = [1, 2, 3];
const testResult = Array.isArray(testArray);
testResult ? console.log('is Array') : console.log('not');

//Original array will not be affected by changes in the new one
const testArrayCopy1 = testArray.slice();

//original array will be affected by changes in the new one
const testArrayCopy2 = testArray

    


