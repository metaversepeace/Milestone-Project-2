// Dependencies
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');

app.use(cors());

//Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.engine('jsx', require('express-react-views').createEngine());

//Controllers & Routes
app.use('/lessons', require('./controllers/lessons'));


// GET /
app.get('/', (req, res) => {
    res.render('home')

});

app.get('*', (req, res) => {
    res.render('error404')
});

app.listen(process.env.PORT, function (){
    console.log("I LIVE AGAIN!")
});