const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];

 for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
         console.log(`Neighbor:${listOfNeighbours[i][j]}`);
    }
}

// for of
for (const arr of listOfNeighbours) {
    for (const country of arr) {
        console.log(`Neighbor:${country}`);
    }
}
