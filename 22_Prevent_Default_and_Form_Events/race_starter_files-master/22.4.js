//when I press right arrow, next td becomes active

//function that makes a td active

//targeting next sibling of active

let active = document.querySelector(".active");
let nextSibling = active.nextElementSibling;

let active2 = document.querySelector(".active2")
let nextSibling2 = active2.nextElementSibling;

// const element = document.getElementsByClassName("active")

//plyer 1
function makeNextActiveP1() {
    nextSibling.classList.add("active");
    active.classList.remove("active");
    active = document.querySelector(".active");
    nextSibling = active.nextElementSibling;
}
//plyer 2
function makeNextActiveP2() {
    nextSibling2.classList.add("active2");
    active2.classList.remove("active2");
    active2 = document.querySelector(".active2");
    nextSibling2 = active2.nextElementSibling;
}

window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowUp") {
        makeNextActiveP1();
    }
    if (e.key === "d") {
        makeNextActiveP2();
    }
});

