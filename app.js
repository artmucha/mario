const express = require('express');
const path = require('path');

const app = express();
const dir = path.join(__dirname, 'public');

app.set("view options", {layout: false});
app.use(express.static(dir));

app.get('/', (req, res) => {
	res.render('index.html');
});

const start = async () => {
    app.listen(5000, () => {console.log('Listening on port 5000')});
};

start();