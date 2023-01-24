const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const orderedList = document.createElement("ol");
orderedList.style.listStyle = "none";
document.body.appendChild(orderedList)

users.forEach((person) => {
  // orderedList.innerHTML += `<li>${person["firstName"]} ${person["lastName"]}</li>`; BAD 
  const li = document.createElement("li");
  li.textContent = `${person["firstName"]} ${person["lastName"]}`;
  li.setAttribute("data-id", `${person["id"]}`);
  orderedList.appendChild(li);
});
