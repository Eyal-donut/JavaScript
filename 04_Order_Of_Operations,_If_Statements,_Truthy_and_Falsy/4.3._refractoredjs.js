let johnsTeam = [89, 120, 103];
let mikesTeam = [116, 94, 123];

// calculate average of array
const teamAverage = (arr) =>
  arr.reduce(((previous, current) => previous + current, 0)) / arr.length;

const johnAvgScore = teamAverage(johnsTeam);
const mikeAvgScore = teamAverage(mikesTeam);

let winner = "Johns team";
let winner2 = "Mikes team";

if (mikeAvgScore === johnAvgScore) {
  console.log(
    `The winners are ${winner} and ${winner2}, with the average score of ${johnAvgScore}`
  );
} else if (mikeAvgScore > johnAvgScore) {
  winner = "Mikes team";
  console.log(
    `The winner is ${winner}, with the average score of ${mikeAvgScore}`
  );
}

johnsTeam = [100, 100, 100];
mikesTeam = [100, 100, 100];

johnAvgScore = teamAverage(johnsTeam);
winner = "Johns team";
winner2 = "Mikes team";

if (teamAverage(mikesTeam) === johnAvgScore) {
  console.log(
    `The winners are ${winner} and ${winner2}, with the average score of ${johnAvgScore}`
  );
} else if (teamAverage(mikesTeam) > johnAvgScore) {
  johnAvgScore = teamAverage(mikesTeam);
  winner = "Mikes team";
  console.log(
    `The winner is ${winner}, with the average score of ${johnAvgScore}`
  );
}

let marysTeam = [97, 134, 105];
johnsTeam = [89, 120, 103];
mikesTeam = [116, 94, 123];

johnAvgScore = teamAverage(johnsTeam);
winner = "Johns team";
let winner3 = "Marys team";

/* mike & jones */
if (
  teamAverage(mikesTeam) === johnAvgScore &&
  teamAverage(marysTeam) < johnAvgScore
) {
  console.log(
    `The winners are ${winner} and ${winner2}, with the average score of ${johnAvgScore}`
  );
} else if (
  /*Jones & mary */
  teamAverage(mikesTeam) < johnAvgScore &&
  teamAverage(marysTeam) === johnAvgScore
) {
  console.log(
    `The winners are ${winner} and ${winner3}, with the average score of ${johnAvgScore}`
  );
} else if (
  /* mike & mary */
  teamAverage(mikesTeam) > johnAvgScore &&
  teamAverage(mikesTeam) === teamAverage(marysTeam)
) {
  johnAvgScore = teamAverage(mikesTeam);
  console.log(
    `The winners are ${winner2} and ${winner3}, with the average score of ${johnAvgScore}`
  );
} else if (
  teamAverage(mikesTeam) === johnAvgScore &&
  teamAverage(marysTeam) === johnAvgScore
) {
  console.log(
    `The winners are ${winner}, ${winner2} and ${winner3}, with the average score of ${johnAvgScore}`
  );
} else if (
  teamAverage(mikesTeam) > johnAvgScore &&
  teamAverage(mikesTeam) > teamAverage(marysTeam)
) {
  johnAvgScore = teamAverage(mikesTeam);
  winner = "Mikes team";
  console.log(
    `The winner is ${winner}, with the average score of ${johnAvgScore}`
  );
} else if (
  teamAverage(marysTeam) > johnAvgScore &&
  teamAverage(marysTeam) > teamAverage(mikesTeam)
) {
  johnAvgScore = teamAverage(marysTeam);
  winner = "Marys team";
  console.log(
    `The winner is ${winner}, with the average score of ${johnAvgScore}`
  );
} else {
  console.log(
    `The winner is ${winner}, with the average score of ${johnAvgScore}`
  );
}

marysTeam = [97, 134, 102];
johnsTeam = [89, 120, 55];
mikesTeam = [116, 94, 123];

johnAvgScore = teamAverage(johnsTeam);
winner = "Johns team";

/* mike & jones */
if (
  teamAverage(mikesTeam) === johnAvgScore &&
  teamAverage(marysTeam) < johnAvgScore
) {
  console.log(
    `The winners are ${winner} and ${winner2}, with the average score of ${johnAvgScore}`
  );
} else if (
  /*Jones & mary */
  teamAverage(mikesTeam) < johnAvgScore &&
  teamAverage(marysTeam) === johnAvgScore
) {
  console.log(
    `The winners are ${winner} and ${winner3}, with the average score of ${johnAvgScore}`
  );
} else if (
  /* mike & mary */
  teamAverage(mikesTeam) > johnAvgScore &&
  teamAverage(mikesTeam) === teamAverage(marysTeam)
) {
  johnAvgScore = teamAverage(mikesTeam);
  console.log(
    `The winners are ${winner2} and ${winner3}, with the average score of ${johnAvgScore}`
  );
} else if (
  teamAverage(mikesTeam) === johnAvgScore &&
  teamAverage(marysTeam) === johnAvgScore
) {
  console.log(
    `The winners are ${winner}, ${winner2} and ${winner3}, with the average score of ${johnAvgScore}`
  );
} else if (
  teamAverage(mikesTeam) > johnAvgScore &&
  teamAverage(mikesTeam) > teamAverage(marysTeam)
) {
  johnAvgScore = teamAverage(mikesTeam);
  winner = "Mikes team";
  console.log(
    `The winner is ${winner}, with the average score of ${johnAvgScore}`
  );
} else if (
  teamAverage(marysTeam) > johnAvgScore &&
  teamAverage(marysTeam) > teamAverage(mikesTeam)
) {
  johnAvgScore = teamAverage(marysTeam);
  winner = "Marys team";
  console.log(
    `The winner is ${winner}, with the average score of ${johnAvgScore}`
  );
} else {
  console.log(
    `The winner is ${winner}, with the average score of ${johnAvgScore}`
  );
}
