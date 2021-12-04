const express = require('express');
const cfg = require('dotenv').config();
const app = express();

//INITIAL PAGE (INIT)
app.get('/', (req,res) => {
    process.env;
});

//Catch all
app.get('*', (req,res) => {

});

//Keep server open on the second best port known to man
app.listen(422);