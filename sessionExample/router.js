const express = require('express');
const router = express.Router();

const  admin = {
    email : "admin@gmail.com",
    password : "admin123"
}

// login user
router.post('/login', (req, res)=> {
    if(req.body.email === admin.email && req.body.password === admin.password) {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        res.end(" Successful ");
    } else {
        res.redirect('/route/dashboard');
        res.end();
    }
});



// route for dashboard
router.get('/dashboard', (req, res) => {
    if(req.session.user) {
        res.render('dashboard', {user : req.session.user});
    } else {
       
        res.send("Unauthorize User");
    }
});

// route for logout
router.get('/logout', (req ,res) => {
    req.session.destroy(function(err) {
        if(err){
            console.log(err);
            res.send("Error");
        }else {
            res.render('base', { title: "Express"});
        }
       
    });
});

module.exports = router;