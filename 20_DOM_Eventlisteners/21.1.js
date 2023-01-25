const button = document.querySelector("button")
const textarea = document.querySelector("input")

button.addEventListener('click', function(event){
    event.preventDefault();
    textarea.value >= 18 ? alert("You can drink") : alert("You're too young");
})