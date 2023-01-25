const button = document.querySelector("form button");
const textarea = document.querySelector("form textarea");
const form = document.querySelector("form")
const label = document.querySelector("label")

const charCounter = (textarea) => {
  let counter = 0;
  for (chars of textarea.value) {
    ++counter;
  }
  return counter;
};

button.addEventListener("click", function (event) {
  event.preventDefault();
  if (charCounter(textarea) >= 100) {
    form.submit();
  } else {
    label.innerHTML = `<label for="text-field">Why are you interested in this position?</label>
    <label class="error" for="text-field">*insert at least 100 characters</label>`
    textarea.classList.add("error");
}
});
