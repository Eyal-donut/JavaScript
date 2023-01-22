  
const testObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}

const keysAndValuesSwap = (obj) => {
    const objSwapped = {};
    for (let key in obj){
        objSwapped[obj[key]] = key;
    }
    return objSwapped
};
console.log(keysAndValuesSwap(testObject))

