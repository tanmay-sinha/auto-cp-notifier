const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get('/register', (req, res) => {
    res.render("register");
});

router.post('/register', (req, res) => {
    let email = req.body.email;
    let a = true, b = true, c = true;
    if (req.body.sites[0].length == 1) a = false;
    if (req.body.sites[1].length == 1) b = false;
    if (req.body.sites[2].length == 1) c = false;

    if (!a && !b && !c) {
        error = 'Please Enter atleast one Site! '
        res.render('register', {
            error,
            email
        });
    }
    else {
        user.addData(a, b, c, email);
        res.send('User registered successfully!!');
    }
});

module.exports = router;