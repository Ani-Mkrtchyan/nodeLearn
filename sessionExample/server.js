const express = require('express');
const bodyparser = require(' body-parser ');
const session = require(' express-session');
const { v4: uuidv4 } = require( ' uuid ');

const router = require('./router');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


app.use(session({
    secret: uuidv4(), 
    cookieName: 'session',
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);


app.get('/', (req, res) =>{
    res.render('base', { title : "Login system"});
})

app.listen( PORT, ()=>{ console.log( ` Server is running on port ${PORT} `)});