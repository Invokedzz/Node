const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log('ALLWAYS');
    next(); // A requisição continua;
});

app.get('/a', (req, res) => {
    console.log('/a: route terminated');
    res.send('a');
});

app.get('/a', (req, res) => {
    console.log('/a: never called');
});

app.get('/b', (req, res, next) => {
    console.log('/b: route terminated');
    res.send('b');
    next();
});

app.get('/b', (req, res) => {
    console.log('error throw');
    throw new Error('b failed');
});

app.use('/b', (err, req, res, next) => {
    console.log('/b error detected and passed on');
    next(err);
});

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});