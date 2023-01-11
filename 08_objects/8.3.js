const bookLor = {
    name: 'Lord of the rings',
    author: 'J. R. R. Tolkien',
    year: 1954,
    //for sub-question 8:
    // publisher: {
    //     publisherName: 'David',
    //     location: 'Space'
    // }
};
const bookBible = {
    name: 'the holy bible',
    author: 'Moses',
    year: 0,
    // for sub-question 8:
    // publisher: {
    //     publisherName: 'God',
    //     location: 'Everywhere'
    // }
};
const bookUtils = {
    getFirstPublished: (book1, book2) => Number(book1.year) < Number(book2.year) ? book1 : book2,
    setNewAddition: (book3, editionYearInput) => {
        book3.latestEdition = editionYearInput
        // return book3
    },
    setLanguage: (book4, languageInput) => {
        book4.language = languageInput
        // return book4
    },
    setTranslation: (book5, transLanguageInput, translatorInput) => {
        book5.translation = {
            translator: translatorInput,
            translationLanguage: transLanguageInput,
        };
        // return book5
    },
    setPublisher: (book6, locationInput, publisherNameInput) => {
        book6.publisher = {
            publisherName: publisherNameInput,
            location: locationInput,
        };
        // return book6
    },
    isSamePublisher: (book8, book9) => book8.publisher.publisherName === book9.publisher.publisherName && book8.publisher.location === book9.publisher.location ? 'yes' : 'no',
};

// console.log(bookUtils.getFirstPublished(bookLor, bookBible))

// console.log(bookUtils.setNewAddition(bookLor, '2001'))
// console.log(bookUtils.setLanguage(bookLor, 'Russian'))

// console.log(bookUtils.setTranslation(bookLor, 'blabla', 'blipblop'))

// console.log(bookUtils.setPublisher(bookBible, 'Knaan', 'god'))

// console.log(bookUtils.isSamePublisher(bookBible, bookLor))