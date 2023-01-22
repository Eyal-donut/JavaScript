const wordsArray = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const letterCounter = (arr) => {
    const counterObj = {};
    let letterCount = 0;
    let mostFrequentLetter = null;

    for (const word of arr) {
        for (const char of word) {
            if (!char.toLowerCase().includes(" ")) {
                counterObj[char] = 0;
            }
        }
    }
    for (const word of arr) {
        for (const char of word) {
            if (!char.toLowerCase().includes(" ")) {
                counterObj[char] += 1;
            }
        }
    }
    for (const key in counterObj){
        if (counterObj[key] > letterCount) {
            letterCount = counterObj[key];
            mostFrequentLetter = key
        }
    }
    console.log(`The letter with the most occurrences is ${mostFrequentLetter}, with ${letterCount} occurrences.`)
    return counterObj
}
console.log(letterCounter(wordsArray))