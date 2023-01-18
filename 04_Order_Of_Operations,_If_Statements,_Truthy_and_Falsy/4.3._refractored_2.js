let johnsTeam = [89, 120, 103];
let mikesTeam= [116, 94, 123];
let marysTeam = [97, 134, 105];

const calculateAvg = (arr) => arr.reduce((previous, current) => previous + current, 0) / arr.length

const johnAvgScore = calculateAvg(johnsTeam);
const mikeAvgScore = calculateAvg(mikesTeam);
const maryAvgScore = calculateAvg(marysTeam);

const johnTeam = "John's team";
const mikeTeam = "Mike's team";
const maryTeam = "Mary's team";

const sayWhoWins = (team1Name, team2Name, team3Name, team1Avg, team2Avg, team3Avg) => {
    if (team1Avg > team2Avg && team1Avg > team3Avg){
        console.log(`${team1Name} wins with the average score of ${team1Avg}`)
    } else if (team2Avg > team1Avg && team2Avg > team3Avg) {
        console.log(`${team2Name} wins with the average score of ${team2Avg}`)
    } else if (team3Avg > team1Avg && team3Avg > team2Avg) {
        console.log(`${team3Name} wins with the average score of ${team3Avg}`)
    } else {
        console.log(`There is a draw with the average score of ${team1Avg}`)
    }
}

sayWhoWins(johnTeam, mikeTeam, maryTeam, johnAvgScore, mikeAvgScore, maryAvgScore)