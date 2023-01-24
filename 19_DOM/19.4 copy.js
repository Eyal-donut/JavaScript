const body = document.querySelector("body");



const main = document.createElement("main");
const footer = document.createElement("footer");
document.body.append(navbar, main, footer);

const navbar = document.createElement("div");
navbar.style.background = "#333"
navbar.style.color = "#ffffff"
navbar.style.display = "flex";
navbar.style.justifyContent = "center"
navbar.style.alignItems = "center"
navbar.style.height = "70px"
navbar.style.width = "100vw"

const ul = document.createElement("ul");
navbar.append(ul);
ul.style.display = "flex";
ul.style.justifyContent = "center"
// const home = document.createElements("li");
// home.textContent = "home"
// const about = document.createElements("li");
// about.textContent = "About"
// const contact = document.createElements("li");
// contact.textContent = "contact"
ul.innerHTML += "<li>Home</li>"
ul.innerHTML += "<li>Home</li>"
ul.innerHTML += "<li>Home</li>"
ul.append(home, about, contact);

ul.style.fontFamily = "Arial"
ul.style.fontSize = "24px"
ul.style.listStyle = "none"


