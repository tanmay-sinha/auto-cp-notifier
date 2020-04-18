const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

// connect database.
require('./models/user');

const app = express();
const PORT = process.env.PORT || 5000;

// Body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// EJS
app.use(expresslayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/home'));
app.use('/', require('./routes/register'));

// Scrapping site
require('./models/scrapper');

// Sending notification
require('./models/notify');

// start server
app.listen(PORT, (err) => {
    if (!err) console.log("App running on port: ", PORT);
    else console.log(err);
});