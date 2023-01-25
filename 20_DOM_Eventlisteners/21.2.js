const h1 = document.querySelector("h1");
const buttonPlus = document.querySelector("button.plus");
const buttonMinus = document.querySelector("button.minus");

const declaration = window.getComputedStyle(h1);
let fontSizeValue = parseFloat(declaration.getPropertyValue("font-size"));

buttonPlus.addEventListener("click", function increaseSize() {
  fontSizeValue < 100 ? ++fontSizeValue : "";
  h1.style.fontSize = `${fontSizeValue}px`;
});

buttonMinus.addEventListener("click", function decreaseSize() {
  fontSizeValue > 6 ? --fontSizeValue : "";
  h1.style.fontSize = `${fontSizeValue}px`;
});
