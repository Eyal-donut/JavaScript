const sevenBoom = (n) => {
    let answerArray = [];
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 0 && i.toString().includes('7')) {
            answerArray.push('BOOM BOOM')
        }
        else if (i % 7 === 0) {
            answerArray.push('BOOM')
        }
        else {answerArray.push(i)} 
    }
    return answerArray.toString()
}
console.log(sevenBoom(18))