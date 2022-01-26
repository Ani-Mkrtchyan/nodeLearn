const express = require('express');
   
const app = express();

const PORT = process.env.PORT || 3000;
   

const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.post("/", urlencodedParser, (request, response) => {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(` ${request.body.fname} ${request.body.lname} 
                    email - a${request.body.email}`);
});
   
app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`)});




