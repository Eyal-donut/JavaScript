const button = document.querySelector("button");
const titleElement = document.querySelector("h2")
const textElement = document.querySelector("p")

button.addEventListener("click", function () {
//     fetch("https://api.jokes.one/jod")
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//     response.json().then((data) => {
//         const title = data.contents.jokes[0].joke.title;
//         console.log(title);
//         titleElement.innerText = title
//         const joke = data.contents.jokes[0].joke.text;
//         console.log(joke);
//         textElement.innerText = joke
//       });
//     })
//     .catch((err) => {
//       console.log("Something went wrong");
//       console.log(err);
//     });
//   });

    new Promise((resolve, reject) => {
        const response = {
            success: {
              total: 1
            },
            contents: {
              jokes: [
                {
                  description: "Joke of the day ",
                  language: "en",
                  background: "",
                  category: "jod",
                  date: "2023-02-06",
                  joke: {
                    title: "Knock Knock - Opera who?",
                    lang: "en",
                    length: "111",
                    clean: "1",
                    racial: "0",
                    date: "2023-02-06",
                    id: "oFr2gwJ7UpCrRffHKbXksQeF",
                    text: "Knock Knock\r\nWho's there?\r\nOpera!\r\nOpera who?\r\nOpera-tunity, and you thought opportunity only knocked once!"
                  }
                }
              ],
              copyright: ""
            }
          }
        resolve(response)
    }).then((data) => {
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


