const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function bookCanBeRead(arr) {
    const canRead = [];
  arr.forEach(function (element) {
    if (element.readingStatus === true) {
       canRead.push(element);
    }
  });
  return canRead;
}
console.log(bookCanBeRead(library));
