const wordsArray = ["hi", "there", "what", "is", "up"];
const mixedArray = ["dog", 3]
let capsArray = [];

function isString(arg){
    return typeof arg === 'string'
}

function makeAllCaps(arr) {
  arr.forEach((word) => {
    capsArray.push(word.toUpperCase());
  });
  return capsArray;
}

function sortWords(arr) {
  console.log(arr.sort());
}

const checkArray = (arr) => {
  return new Promise((resolve, reject) => {
      if (arr.every(isString)) {
          resolve();
    } else {
          reject();
      }
  });
};

checkArray(wordsArray)
  .then(() => {
    makeAllCaps(wordsArray);
    return checkArray(capsArray);
  })
  .then(() => {
    return sortWords(capsArray);
  })
  .catch(() => {
    console.log('error')
  });

checkArray(mixedArray)
  .then(() => {
    makeAllCaps(mixedArray);
    return checkArray(capsArray);
  })
  .then(() => {
    return sortWords(capsArray);
  })
  .catch(() => {
    console.log('The array does not contain only strings')
  });

