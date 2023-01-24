const title = document.querySelector(".start-here");
title.textContent = "main-title";

const nestedUl = document.querySelector("ul ul");
nestedUl.innerHTML += "<li>sub title 4</li>";

const outerUl = document.querySelector("ul");
outerUl.lastElementChild.remove();

const titleElement = document.querySelector("title");
titleElement.textContent = "Master Of The DOM";

const p = document.querySelector("p");
p.textContent = "hi sexy";
