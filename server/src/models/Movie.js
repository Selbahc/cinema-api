const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    release_date: String,
    overview: String,
    title: {type: String, required: true},
    original_title: {type: String, required: true},
    poster_path: String
}, {versionKey: false});

module.exports = mongoose.model('Favorite', MovieSchema);