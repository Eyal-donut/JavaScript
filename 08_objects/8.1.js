const book = {
    chapters: 40,
    pages: 1000,
    type: 'novel',
    genre: 'fantasy',
    bookName: 'Harry Potter',
    author: 'J. K. Rowling',
    publishingYear: 1997
}
const bookInformation = (book) => `The book ${book.bookName} was written ${book.author} in the year ${book.publishingYear}.`;
