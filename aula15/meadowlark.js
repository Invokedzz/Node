const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, err) => {
    res.type('text/plain');
    res.status(500);
    res.send('Deu 500 logo você sucumbiu');
    console.error(err);
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('Deu 404, logo você sucumbiu também');
})

app.listen(port, () => {
    console.log(`The server is online at http://localhost:${port}`);
});