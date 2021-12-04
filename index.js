require('dotenv').config();

const PORT = process.env.PORT;
const express = require('express');
const app = express();

app.use('/places', require('./controllers/places'));

//INITIAL PAGE (INIT)
app.get('/', (req,res) => {
    res.send('Hello World!');
});

//Catch all 404
app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</h1>')
});

//Keep server open on the best port known to man
app.listen(PORT, () => {console.log('Running on port '+PORT+'...')});