const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));


app.get('/testes/:iduser?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query .nome);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulário');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor sendo executado na porta anônima');
});
