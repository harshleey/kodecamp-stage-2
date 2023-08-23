// Create Book constructor function
function Book(title, author, genre) {
 this.title = title;
 this.author = author;
 this.genre = genre;
}

// Create LibraryCatalog function and initiate an empty array
function LibraryCatalog() {
 this.books = [];
}

// Add a book
LibraryCatalog.prototype.addBook = function (book) {
 this.books.push(book);
};

LibraryCatalog.prototype.bookIterator = function* () {
 for (const book of this.books) {
   yield book;
 }
};

LibraryCatalog.prototype[Symbol.iterator] = LibraryCatalog.prototype.bookIterator;

LibraryCatalog.prototype.getBooksByAuthor = function (author) {
 return this.books.filter(book => book.author === author);
};

const library = new LibraryCatalog();

library.addBook(new Book("Friends", "Ross Geller", "Fiction"));

library.addBook(new Book("How i met your mother", "Theordore Evelyn Mosby", "Non-Fiction"));

library.addBook(new Book("We were on a break", "Ross Geller", "Fiction"));

// Get the title of all the books
for (const book of library) {
 // console.log(book.title);
}

// Filter out books written by ross
const booksWrittenByRoss = library.getBooksByAuthor("Ross Geller");
for (const book of booksWrittenByRoss) {
  console.log(book.title);
}