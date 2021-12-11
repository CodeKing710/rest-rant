const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: String,
    pic: String,
    cuisines: String,
    city: String,
    state: String,
    founded: Number
});

module.exports = mongoose.model('Place',placeSchema);