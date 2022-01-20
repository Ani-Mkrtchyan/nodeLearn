const http = require('http');
const books = require("./data/books.json");
const { getBooks, getBook, createBooks } = require('./controllers/bookController');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) => {

    if(req.url === "/api/books" && req.method === "GET") {
       getBooks(req,res);

    } else if(req.url.match(/\/api\/books\/([0-9]+)/) && req.method === "GET") {

        const id = req.url.split('/')[3];
        getBook(req, res, id);

    } else if( req.url === "/api/books" && req.method === "POST") {
         createBooks(req,res);
    
    } else {

     res.writeHead(404, { 'Contect-Type': 'application/json' });
     res.end(JSON.stringify({message:"not found"}));

     }
 
});

server.listen(PORT, () => {
    console.log(` Server is running on ${PORT} port`);
});