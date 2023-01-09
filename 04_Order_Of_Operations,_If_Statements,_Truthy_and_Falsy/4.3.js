let johnsTeam = [89, 120, 103];
let mikesTeam = [116, 94, 123];

const sumofArray = (arr) => {
    let sum = arr.reduce(accumulator, 0);
    return sum
}
const accumulator = (previous, current) => previous + current;

const teamAverage = (arr) => (sumofArray(arr)/arr.length)

let highestScore = teamAverage(johnsTeam)
let winner = 'Johns team'

if (teamAverage(mikesTeam) === highestScore) {
    let winner2 = 'Mikes team'
    console.log(`The winners are ${winner} and ${winner2}, with the average score of ${highestScore}`)
}

else if (teamAverage(mikesTeam) > highestScore) {
    highestScore = teamAverage(mikesTeam)
    winner = 'Mikes team'
    console.log(`The winner is ${winner}, with the average score of ${highestScore}`)

}



johnsTeam = [100, 100, 100];
mikesTeam = [100, 100, 100];

highestScore = teamAverage(johnsTeam)
winner = 'Johns team'
let winner2 = 'Mikes team'


if (teamAverage(mikesTeam) === highestScore) {
    console.log(`The winners are ${winner} and ${winner2}, with the average score of ${highestScore}`)
}

else if (teamAverage(mikesTeam) > highestScore) {
    highestScore = teamAverage(mikesTeam)
    winner = 'Mikes team'
    console.log(`The winner is ${winner}, with the average score of ${highestScore}`)

}


let marysTeam = [97, 134, 105]
johnsTeam = [89, 120, 103];
mikesTeam = [116, 94, 123];

highestScore = teamAverage(johnsTeam)
winner = 'Johns team'
let winner3 = 'Marys team'

/* mike & jones */
if (teamAverage(mikesTeam) === highestScore && teamAverage(marysTeam) < highestScore) {
    console.log(`The winners are ${winner} and ${winner2}, with the average score of ${highestScore}`)
}

/*Jones & mary */
else if (teamAverage(mikesTeam) < highestScore && teamAverage(marysTeam) === highestScore) {
    console.log(`The winners are ${winner} and ${winner3}, with the average score of ${highestScore}`)
}

/* mike & mary */
else if (teamAverage(mikesTeam) > highestScore && teamAverage(mikesTeam) === teamAverage(marysTeam)) {
    highestScore = teamAverage(mikesTeam)
    console.log(`The winners are ${winner2} and ${winner3}, with the average score of ${highestScore}`)
}

else if (teamAverage(mikesTeam) === highestScore && teamAverage(marysTeam) === highestScore ) {
    console.log(`The winners are ${winner}, ${winner2} and ${winner3}, with the average score of ${highestScore}`)
}

else if (teamAverage(mikesTeam) > highestScore && teamAverage(mikesTeam) > teamAverage(marysTeam)) {
    highestScore = teamAverage(mikesTeam)
    winner = 'Mikes team'
    console.log(`The winner is ${winner}, with the average score of ${highestScore}`)
}

else if (teamAverage(marysTeam) > highestScore && teamAverage(marysTeam) > teamAverage(mikesTeam)) {
    highestScore = teamAverage(marysTeam)
    winner = 'Marys team'
    console.log(`The winner is ${winner}, with the average score of ${highestScore}`)
}
else {
    console.log(`The winner is ${winner}, with the average score of ${highestScore}`)
}



marysTeam = [97, 134, 102]
johnsTeam = [89, 120, 55];
mikesTeam = [116, 94, 123];

highestScore = teamAverage(johnsTeam)
winner = 'Johns team'

/* mike & jones */
if (teamAverage(mikesTeam) === highestScore && teamAverage(marysTeam) < highestScore) {
    console.log(`The winners are ${winner} and ${winner2}, with the average score of ${highestScore}`)
}

/*Jones & mary */
else if (teamAverage(mikesTeam) < highestScore && teamAverage(marysTeam) === highestScore) {
    console.log(`The winners are ${winner} and ${winner3}, with the average score of ${highestScore}`)
}

/* mike & mary */
else if (teamAverage(mikesTeam) > highestScore && teamAverage(mikesTeam) === teamAverage(marysTeam)) {
    highestScore = teamAverage(mikesTeam)
    console.log(`The winners are ${winner2} and ${winner3}, with the average score of ${highestScore}`)
}

else if (teamAverage(mikesTeam) === highestScore && teamAverage(marysTeam) === highestScore ) {
    console.log(`The winners are ${winner}, ${winner2} and ${winner3}, with the average score of ${highestScore}`)
}

else if (teamAverage(mikesTeam) > highestScore && teamAverage(mikesTeam) > teamAverage(marysTeam)) {
    highestScore = teamAverage(mikesTeam)
    winner = 'Mikes team'
    console.log(`The winner is ${winner}, with the average score of ${highestScore}`)
}

else if (teamAverage(marysTeam) > highestScore && teamAverage(marysTeam) > teamAverage(mikesTeam)) {
    highestScore = teamAverage(marysTeam)
    winner = 'Marys team'
    console.log(`The winner is ${winner}, with the average score of ${highestScore}`)
}
else {
    console.log(`The winner is ${winner}, with the average score of ${highestScore}`)
}

