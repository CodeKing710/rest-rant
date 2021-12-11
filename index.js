require('dotenv').config();

//App init and Globals
const PORT = process.env.PORT;
const express = require('express');
const methodOverride = require('method-override');
const app = express();

//App settings
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//Set places route controller
app.use('/places', require('./controllers/places'));

//INITIAL PAGE (INIT)
app.get('/', (req,res) => {
    res.render('home');
});

//Catch all 404
app.get('*', (req,res) => {
    res.render('error404');
});

//Keep server open on the best port known to man
app.listen(PORT, () => {console.log('Running on port '+PORT+'...')});