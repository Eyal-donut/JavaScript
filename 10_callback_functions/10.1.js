function callBackfunc(input) {
    console.log(input);
}
const isString = (str, callBackfunc) => {
    if (typeof str === "string") {
        callBackfunc(str);
    } else {
        console.log('not a string')
    }
}
isString(56, callBackfunc)

function createDashesFunc(str) {
  let arr = [];
  for (let k = 0; k < str.length; k++) {
    arr.push(str[k]);
    arr.push("-");
  }
  arr.pop();
  return arr.toString().replaceAll(",", " ");
}


let firstWord = [];
const firstWordUpperCase = (sent, createDashesFunc) => {
  for (let j = 0; j <= sent.length; j++) {
    if (sent[j] !== " ") {
      firstWord.push(sent[j].toUpperCase());
    } else {
      break;
    }
  }
  console.log(createDashesFunc(firstWord));
};
firstWordUpperCase("The boy ate poo", createDashesFunc);

function addLove(string) {
    string = (string + " <3")
    console.log(string)
}
const spreadLove = (arg, addLove) => {
    if (typeof arg === 'string') {
        addLove(arg);
    } else {
        console.log('we only love strings')
    }
}
spreadLove('hi', addLove)