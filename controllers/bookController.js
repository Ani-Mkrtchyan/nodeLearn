const Book = require('../models/bookModel');

//@desc  CET all books

async function getBooks(req, res) {
  try {
       const books = await Book.findAll();
       res.writeHead(200, { 'Contect-Type': 'application/json' });
       res.end(JSON.stringify(books)); 

  } catch (error) {

       console.log(error);
      }
}


//@desc  CETS book by id

async function getBook(req, res, id ) {
    try {
         const book = await Book.findById(id);

         if(!book) {

            res.writeHead(404, { 'Contect-Type': 'application/json' });
            res.end(JSON.stringify({message: "not found" }));

        } else {
            res.writeHead(200, { 'Contect-Type': 'application/json' });
            res.end(JSON.stringify(book));
        }     
    } catch (error) {
         
        console.log(error);
    }
    }

    //@desc  POST create a book

async function createBooks(req, res){
    try {
        const book = {
            name: "TyprSctript"
        };

        const newBook = await Book.create(book);
        res.writeHead(201, { 'Contect-Type': 'application/json' });
         return  res.end(JSON.stringify(newBook));

    } catch (error) {
        console.log(error);
    }
    }
 
module.exports = { getBooks, getBook, createBooks };