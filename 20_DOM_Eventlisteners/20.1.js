const button = document.querySelector("button")
const input = document.querySelector("input")

button.addEventListener('click', function(event){
    event.preventDefault();
    input.value >= 18 ? alert("You can drink") : alert("You're too young");
})