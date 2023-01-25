const input = document.querySelectorAll("form > div input");
const inputArray = Array.from(textarea);
const form = document.querySelector("form");
const button = document.querySelector(".btn");

const realPass = Array.from(document.querySelector("h3").innerText);
const insertedPass = [];

const fillBox = (input) => {
  if (/^[a-zA-Z0-9]$/.test(input.value)) {
    insertedPass.push(input.value.toLowerCase());
    input.nextElementSibling?.focus();
  } else {
    input.value = "";
  }
};

const autoSubmit = () => {
  insertedPass.join("") === realPass.join("") ? form.submit() : "";
};

const fillFromClipboard = (event) => {
  event.preventDefault();
  let paste = (event.clipboardData || window.clipboardData)
    .getData("text/plain")
    .toLowerCase();
  if (realPass.join("") === [...paste].join("")) {
    form.submit();
    alert("Great Success!");
  } 
};

inputArray.forEach((input) => {
  input.addEventListener("keyup", (event) => fillBox(input));
  input.addEventListener("keyup", (event) => autoSubmit());
  input.addEventListener("paste", (event) => fillFromClipboard(event), false);
});
button.addEventListener("click", (event) => alert("invalid password"));
