const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render("register");
});

router.post('/register', (req, res) => {
    const email = req.body.email;
    if (req.body.sites[0].length == 1 &&
        req.body.sites[1].length == 1 &&
        req.body.sites[2].length == 1
    )
    {
        error = 'Please Enter atleast one Site! '
        res.render('register',{
            error,
            email
        });
    }
    else
    res.send('hello');
});

module.exports = router;