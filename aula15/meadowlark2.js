const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('Discover more about Meadowlark');
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.listen(port, () => {
   console.log(`Server on http://localhost:${port}`);
});

// Através do 'GET' conseguimos definir nossas rotas.