const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`Processing request for ${req.url}`);
    next(); // Isso indica que a requisição continua.
});

app.use((req, res, next) => {
    console.log('Terminating request');
    res.send('Thanks for playing!');
});

app.use((req, res, next) => {
    console.log("I won't even appear!");
});

// Nesse caso, esse último não vai aparecer porque não demos continuidade à requisição. Veja que, no outro "app.use" não inserimos o "next()". Isso quer dizer que a nossa requisição acabou ali.

app.get('/', (req, res) => {
    res.send('Die worm.')
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});