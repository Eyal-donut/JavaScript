
button.addEventListener("click", async function (event) {
  event.preventDefault();
  try {
    const response = await fetch();
    if (!response.ok) throw "Something went wrong";

    const data = await response.json();
    const username = "";
    const numOfPublicRepo = "";
    const photo = "";
    createUser(username, numOfPublicRepo, photoUrl);
  } catch (err) {
    console.log(err);
  }
});