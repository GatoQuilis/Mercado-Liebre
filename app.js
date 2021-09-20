const express = require ('express');
const path = require ('path');

const app = express();

const port = process.env.PORT || 3000;

app.use (express.static('public'));

app.listen (port, () => console.log('Server up at: http://localhost:3000'));

app.get ('/', (req, res) => {
    res.sendFile (path.resolve ('./views/home.html'));
})

app.get ('/login', (req, res) => {
    res.sendFile (path.resolve ('./views/login.html'));
})

app.get ('/register', (req, res) => {
    res.sendFile (path.resolve ('./views/register.html'));
})

