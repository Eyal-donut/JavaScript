const populations = [9, 143, 214, 83]
const populationsPercentage = (populations) => {
    const percentages = [];
    let i = 0;
    while (i < populations.length) {
        percentages.push(((populations[i]/7900)*100).toFixed(2));
        i++;
    }
return percentages;
}
console.log(populationsPercentage(populations))

/*The for loop is better in this case, clearer*/