const smiley = document.querySelector(".smiley");
const num = document.querySelector("input");
const button = document.querySelector("button");
const container2 = document.querySelector(".container2");
const input = document.querySelector("input");

button.addEventListener("click", function (event) {
  event.preventDefault();
  for (let i = 0; i < num.value -1; ++i) {
    const newSmiley = document.createElement("div");
    newSmiley.classList.add("smiley");
    container2.appendChild(newSmiley);
  }
});

input.addEventListener("input", function () {
  container2.innerHTML = "";
});
