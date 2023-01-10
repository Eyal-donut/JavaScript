const stringsLengthCounter = (stringsArray) => {
    const numArray = [];
    for (let i = 0; i < stringsArray.length; i++){
        numArray.push(stringsArray[i].length)
    }
    console.log(numArray)
}

(stringsLengthCounter(["boo", "ddddd", "fff", "ee"]))