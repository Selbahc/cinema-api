const express = require('express');
const config = require('./config/config');
const connectDb = require('./db');

const server = express();

connectDb(config.db);

server.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`)
})