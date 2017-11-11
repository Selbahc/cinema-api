const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

router.post('/favorites/new', express.urlencoded({extended: true}), (req, res) => {
    console.log(req.body)
});

module.exports = router;