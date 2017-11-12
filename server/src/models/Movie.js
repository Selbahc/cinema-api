const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    date: Number,
    overview: String,
    title: {type: String, required: true},
    originalTitle: {type: String, required: true},
    poster: String
}, {versionKey: false});

module.exports = mongoose.model('Favorite', MovieSchema);