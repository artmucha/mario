const express = require('express');
const path = require('path');

const app = express();
const dir = path.join(__dirname, 'assets');

app.use(express.static(dir));

const start = async () => {
    app.listen(5000, () => {console.log('Listening on port 5000')});
};

start();