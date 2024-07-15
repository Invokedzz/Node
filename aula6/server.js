const express = require('express');
const app = express();
//          criar   ler  atualizar  apagar
// CRUD -> CREATE, READ,  UPDATE,   DELETE;
//          POST    GET    PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página;
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco');
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});        // Para criar algo;

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});