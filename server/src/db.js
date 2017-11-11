const mongoose = require('mongoose');

module.exports = (db) => mongoose.connect(db, () => console.log('DB connected'))
