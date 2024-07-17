const express = require('express');
const app = express();

app.get('/analise/:idusuario?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.query .nome, req.query .sobrenome);
});

app.listen(3000, () => {
    console.log('Iniciando protocolo...');
    console.log('Acessar http://localhost:3000');
});
