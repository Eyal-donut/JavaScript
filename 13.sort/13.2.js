const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];

const descSort = foods.slice().sort().reverse()
console.log(descSort)

const ascSort = foods.slice().sort()
console.log(ascSort)



const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];

const descSortWithUpperCase = foodsWithUpperCase.slice().sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase())).reverse()
console.log(descSortWithUpperCase)

const ascSortWithUpperCase = foodsWithUpperCase.slice().sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(ascSortWithUpperCase)

const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];

const longestToShortest = words.sort((a, b) => b.length - a.length)
console.log(longestToShortest)