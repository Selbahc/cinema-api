const express = require('express');
const config = require('./config/config');
const connectDb = require('./db');
const cors = require('cors');
const router = require('./routes');

const server = express();

server.use(cors());
server.use(router);

connectDb(config.db);

server.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`)
})