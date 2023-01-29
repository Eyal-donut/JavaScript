const wrong = document.querySelector(".wrong");
const right = document.querySelector(".right");
const playAgain = document.querySelector(".play-again");
const button = document.querySelector("button");
const keyGuessed = document.querySelector(".keys-guessed");
const letterBox = document.querySelector(".letter-box");
const regex = /^[a-zA-Z]*$/

function addClass(variable) {
  variable.classList.add("display");
}

function removeClass(variable) {
  variable.classList.remove("display");
}

function makeRandomChar() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomChar;
}

function handler(e) {
    const keyPressed = e.key
    if (keyPressed !== makeRandomChar()) {
      addClass(wrong);
      if (regex.test(keyPressed) && !keyGuessed.textContent.includes(`${keyPressed}`)){
      keyGuessed.textContent += `${keyPressed}, `;
      }
    } else {
      addClass(right);
      addClass(playAgain);
      addClass(button);
      removeClass(wrong);
      letterBox.textContent = keyPressed;
      window.removeEventListener("keypress", handler)
    }
}

window.addEventListener("keypress", handler)

button.addEventListener("click", function (e) {
    removeClass(right);
    removeClass(playAgain);
    removeClass(button);
    keyGuessed.textContent = ''
    letterBox.textContent = '?';
    makeRandomChar();
    window.addEventListener("keypress", handler);
});

