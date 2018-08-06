// const app = require("express")();
const express = require("express");
const app = express();
const slug = require("slug");
const merge = require("lodash/merge");
const config = require("./config/development");
const bodyParser = require("body-parser");
const USERS = require("./mock-data/users");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
  console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
  next();
});

// endpoint = url + method

// Controller
const getUsers = (req, res, next) => {
  req.users = USERS;
  next();
};

const addUser = (req, res, next) => {
  const user = req.body;
  USERS.push(user);
  req.users = USERS;
  next();
};

// Controller
const sendUsers = (req, res, next) => {
  res.status(200);
  res.json(req.users);
};

const updateUser = (req, res, next) => {
  const { index } = req.params;
  const updateInfo = req.body;
  req.user = merge(USERS[index], updateInfo);
  next();
};

const sendUser = (req, res, next) => {
  res.status(200);
  res.json(req.user);
};

const deleteUser = (req, res, next) => {
  const { index } = req.params;
  USERS.splice(index, 1);
  next();
};

const sendMessage = (req, res, next) => {
  res.status(200);
  res.send("Entry was deleted");
};

const getBooks = (req, res, next) => {
  const index = req.params.index;
  req.books = USERS[index].books;
  next();
};

const addBook = (req, res, next) => {
  const { index } = req.params;
  const book = req.body;
  USERS[index].books.push(book);
  req.books = USERS[index].books;
  next();
};

const sendBooks = (req, res, next) => {
  res.status(200);
  res.json(req.books);
};

const updateBook = (req, res, next) => {
  const { index, title } = req.params;
  const updateInfo = req.body;
  const books = USERS[index].books;
  const findBook = books.find(el => slug(el.title.toLowerCase()) === title);
  req.book = merge(findBook, updateInfo);
  next();
};

const sendBook = (req, res, next) => {
  res.status(200);
  res.json(req.book);
};

const deleteBook = (req, res, next) => {
  const { index, title } = req.params;
  const books = USERS[index].books;
  const bookIndex = books.findIndex(
    el => slug(el.title.toLowerCase()) === title
  );
  books.splice(bookIndex, 1);
  next();
};

const findUserBooks = (req, res, next) => {
  const { index, title } = req.params;
  const books = USERS[index].books;
  const titleBooks = books.filter(el => slug(el.title.toLowerCase()) === title);
  req.books = titleBooks;
  next();
};

const showUserBooks = (req, res, next) => {
  res.status(200);
  res.json(req.books);
};

// Users
app.get("/users/", getUsers, sendUsers);
app.post("/users/", addUser, sendUsers);
app.put("/users/:index/", updateUser, sendUser); // (Lodash) _.merge
app.delete("/users/:index/", deleteUser, sendMessage);

// Books
app.get("/users/:index/books", getBooks, sendBooks);
app.post("/users/:index/books", addBook, sendBooks);
app.put("/users/:index/books/:title", updateBook, sendBook);
app.delete("/users/:index/books/:title", deleteBook, sendMessage);
// *
app.get("/users/:index/books/:title", findUserBooks, showUserBooks);

// app.post("/users/")
// app.put("/users/")
// app.delete("/users/")
// app.all("/users/")

// Not Found Error
app.use((req, res, next) => {
  const error = new Error("Not Found!");
  next(error);
});

// All errors
app.use((err, req, res, next) => {
  res.status(500);
  res.json({
    error: err.message,
    stack: err.stack
  });
});

app.listen(config.port);
