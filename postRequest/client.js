const https = require('https'); // if I change https and write http it don't work

const data = JSON.stringify({
    name: "admin",
    email: "admin@789"
});

const options = {
    hostname: 'reqres.in', // why  it don't work , if I write "localhost"
    path: '/api/users',   // and change this path 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};
const req = https.request(options, (res) => {
    let data = '';

    console.log('Status Code:', res.statusCode);

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Body: ', JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error: ", err.message);
});

req.write(data);
req.end();