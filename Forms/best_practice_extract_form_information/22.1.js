const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const emailInput = document.querySelector("#email");
const checkbox = document.querySelector("#checkbox");
const modal = document.querySelector(".modal");
const modalSubmit = document.querySelector("#submit-btn");
const changeInput = document.querySelector("#change-btn");
const sendConfirmation = document.querySelector(".send-confirmation");
const liName = document.querySelector("#li-name");
const liAge = document.querySelector("#li-age");
const liEmail = document.querySelector("#li-email");
const checkboxAlert = document.querySelector("#checkbox-alert")

//! This for of loop is best practice from the modern JS bootcamp Udemy course - (up to the console log part) to retrieve form information
const formData = {};
for (let input of [nameInput, ageInput, emailInput, checkbox]) {
  input.addEventListener("input", function ({ target }) {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
    console.log(formData);

    liName.innerText = `Full name: ${nameInput.value}`
    liAge.innerText = `Age: ${ageInput.value}`
    liEmail.innerText = `Email: ${emailInput.value}`
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkbox.checked ? modal.classList.toggle("display") : checkboxAlert.classList.toggle("display")
});
modalSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  sendConfirmation.classList.toggle("display");
});

changeInput.addEventListener("click", function (e) {
    modal.classList.toggle("display");
    sendConfirmation.classList.remove("display");
});
