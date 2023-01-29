const wrong = document.querySelector(".wrong");
const right = document.querySelector(".right");
const playAgain = document.querySelector(".play-again");
const button = document.querySelector("button");

function toggleDisplay(variable) {
  variable.classList.toggle("display");
}


function randomCharacter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
   const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
   return randomCharacter
}

window.addEventListener('keypress', function(e){

})
