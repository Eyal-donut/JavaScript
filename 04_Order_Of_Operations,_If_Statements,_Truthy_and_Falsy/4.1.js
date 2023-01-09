const prompt=require("prompt-sync")({sigint:true});

const numSiblings = Number(prompt("How many siblings do you have"));

if (numSiblings === 1) {
    console.log('1 sibling!')
}
else if (numSiblings > 1) {
    console.log('More than one sibling')
}
else {
    console.log('No siblings')
}


