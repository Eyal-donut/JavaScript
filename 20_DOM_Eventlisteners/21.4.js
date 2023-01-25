const body = document.querySelector("body");
const lightbulb = document.querySelector("div");

lightbulb.addEventListener("click", function () {
    body.classList.toggle("on")
});
