const express = require ('express');
const path = require ('path');

const morgan = require ('morgan');

const app = express();

const port = process.env.PORT || 3000;

app.use (express.static('public'));

app.listen (port, () => console.log('Server up at: http://localhost:3000'));

app.get ('/', (req, res) => {
    res.sendFile (path.resolve ('./views/home.html'));
})

