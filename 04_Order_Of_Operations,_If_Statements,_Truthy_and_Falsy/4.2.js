const numToLetterScore = (num) => {
    if (0 <= num && num <= 64) {return 'F'}
    else if (65 <= num && num <= 69) {return 'D'}
    else if (70 <= num && num <= 79) {return 'C'}
    else if (80 <= num && num<= 89) {return 'B'}
    else if (90 <= num && num <= 100) {return 'A'}
}
console.log(numToLetterScore(70))