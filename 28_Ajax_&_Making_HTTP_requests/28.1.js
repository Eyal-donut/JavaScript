const button = document.querySelector("button");
const titleElement = document.querySelector("h2")
const textElement = document.querySelector("p")

button.addEventListener("click", function () {
    fetch("https://api.jokes.one/jod")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
    
    response.json().then((data) => {
      const title = data.contents.jokes[0].joke.title;
      console.log(title);
      titleElement.innerText = title
      const joke = data.contents.jokes[0].joke.text;
      console.log(joke);
      textElement.innerText = joke
    });
  })
  .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
  });
});


