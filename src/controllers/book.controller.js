const books = require("../data/book.data");

// GET ALL BOOKS
exports.getAllBooks = (req, res) => {
  res.json(books);
};

// GET BOOK BY ID
exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "id must be of type number" });
  }

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exist!` });
  }

  res.json(book);
};

// CREATE BOOK
exports.createBook = (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "title and author are required" });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

// UPDATE BOOK
exports.updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ error: "id must be of type number" });
  }

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exist!` });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
};

// DELETE BOOK
exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "id must be of type number" });
  }

  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exist!` });
  }

  const deletedBook = books.splice(index, 1);
  res.json({ message: "Book deleted successfully", book: deletedBook[0] });
};
