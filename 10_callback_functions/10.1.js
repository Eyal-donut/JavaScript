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