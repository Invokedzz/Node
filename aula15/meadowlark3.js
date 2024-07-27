const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.type('text/plain');
    res.send('Essa é a página principal');
});

app.get("/about", (req, res) => {
    res.type('text/plain');
    res.send('Descubra mais nessa sessão');
});

app.get("/about/contate", (req, res) => {
    res.type('text/plain');
    res.send('Nos contate por aqui!');
});

app.use((req, res, err) => {
    if (err) {
        res.status(404);
        res.send('VAI SE FERRAR SEU OTÁRIO');
        console.error(err);
    }
});

app.listen(port, () => {
    console.log(`O nosso servidor inicia na rota ${port}`);
});