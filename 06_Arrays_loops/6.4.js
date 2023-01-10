const populations = [9, 143, 214, 83]
const populationsPercentage = (populations) => {
    const percentages = [];
    for (let i = 0; i < populations.length; i++) {
        percentages.push((populations[i]/7900)*100)
}
return percentages
}
console.log(populationsPercentage(populations))