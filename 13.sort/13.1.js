const numbers = [1, -5, 666, 2, 400, 11];


const descSort = numbers.slice().sort((a, b) => b - a)
console.log(descSort)


const ascSort = numbers.slice().sort((a, b) => a - b)
console.log(ascSort)