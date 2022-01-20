const books = require("../data/books.json");
const { v4 : uuidv4 } = require("uuid");
const { writeDataToFile } = require ("../utils");

function findAll() {

    return new Promise((resolve, reject) => {
    resolve(books);
    
  });
}

function findById(id) {

  return new Promise((resolve, reject) => {

  const book = books.find((p) => p.id === id);
  resolve(book);
  
});
}

function create(book) {

 return new Promise((resolve, reject) => {

const newBook = {id: uuidv4(), ...book};
books.push(newBook);
writeDataToFile('./data/books.json', books);
resolve(newBook);

});
}



module.exports = { findAll, findById, create };