const string = "The more you know, the more you know that you don't know";

let reversedString = '';
for (let i = (string.length -1); i >= 0; i--) {
    reversedString += string[i]
}   
for (let j = 0; j < reversedString.length; j++){
}
const indexOfLastYou = string.length - reversedString.indexOf('uoy') - 3

console.log(indexOfLastYou)

