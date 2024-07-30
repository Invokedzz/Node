const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello');
});

app.use((req, res, err) => {
    if (err) {
        res.status(404);
        res.send('Error on app');
        return;
    }

    return app.get('/', (req, res) => {
        res.type('text/plain');
        res.end('Hello');
    });

});

app.listen(port, () => {
    console.log(`Initialize at http://localhost:${port}`);
});