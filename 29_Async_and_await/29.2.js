const button = document.querySelector("button");
const titleElement = document.querySelector("h2");
const textElement = document.querySelector("p");

button.addEventListener("click", async function () {
  try {
    const response = await fetch("https://api.jokes.one/jod");
    if (!response.ok) throw "Something went wrong"
    const data = await response.json()
    // const data = {
    //     success: {
    //       total: 1
    //     },
    //     contents: {
    //       jokes: [
    //         {
    //           description: "Joke of the day ",
    //           language: "en",
    //           background: "",
    //           category: "jod",
    //           date: "2023-02-06",
    //           joke: {
    //             title: "Knock Knock - Opera who?",
    //             lang: "en",
    //             length: "111",
    //             clean: "1",
    //             racial: "0",
    //             date: "2023-02-06",
    //             id: "oFr2gwJ7UpCrRffHKbXksQeF",
    //             text: "Knock Knock\r\nWho's there?\r\nOpera!\r\nOpera who?\r\nOpera-tunity, and you thought opportunity only knocked once!"
    //           }
    //         }
    //       ],
    //       copyright: ""
    //     }
    //   }
    const title = data.contents.jokes[0].joke.title;
        titleElement.innerText = title;
        const joke = data.contents.jokes[0].joke.text;
        textElement.innerText = joke;
  } 
  catch (err) {
    console.log(err);
  }
});





