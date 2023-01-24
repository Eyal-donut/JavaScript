const body = document.querySelector("body");
body.style.padding = "0";
body.style.margin = "0";

const navbar = document.createElement("div");
navbar.style.background = "#333";
navbar.style.color = "#ffffff";
navbar.style.display = "flex";
navbar.style.justifyContent = "center";
navbar.style.alignItems = "center";
navbar.style.height = "70px";

const ul = document.createElement("ul");
navbar.append(ul);
ul.style.display = "flex";
ul.style.justifyContent = "center";
const home = document.createElement("li");
home.innerText = "Home";
home.style.margin = "0 20px";
const about = document.createElement("li");
about.innerText = "About";
about.style.margin = "0 20px";
const contact = document.createElement("li");
contact.style.margin = "0 20px";
contact.innerText = "Contact";
ul.append(home, about, contact);
ul.style.fontFamily = "Arial";
ul.style.fontSize = "24px";
ul.style.listStyle = "none";

const main = document.createElement("main");
main.style.background = "url(pic.jpg) no-repeat center center/cover";
main.style.height = "100vh";
main.style.width = "100%";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.justifyContent = "center";
main.style.alignItems = "center";
const header = document.createElement("h1");
header.innerText = "Visit Dreamland";
header.style.fontSize = "74px";
header.style.color = "#ffffff";
header.style.opacity = "0.6";
const button = document.createElement("button");
main.append(header, button);
button.style.width = "180px";
button.style.height = "50px";
button.style.opacity = "0.75";
button.innerText = "To Dreamland";
button.style.fontSize = "20px";
button.style.borderRadius = "10px";
button.style.cursor = "pointer";

button.addEventListener("click", () => {
  alert("Close your eyes, you are already there");
});

home.addEventListener(
  "mouseover",
  (event) => {
    home.style.color = "gold";
    setTimeout(() => {
      home.style.color = "";
    }, 500);
  },
  false
);
about.addEventListener(
  "mouseover",
  (event) => {
    about.style.color = "gold";
    setTimeout(() => {
      about.style.color = "";
    }, 500);
  },
  false
);
contact.addEventListener(
  "mouseover",
  (event) => {
    contact.style.color = "gold";
    setTimeout(() => {
      contact.style.color = "";
    }, 500);
  },
  false
);

const gold = document.querySelector(".gold");

const footer = document.createElement("footer");

document.body.append(navbar, main, footer);
