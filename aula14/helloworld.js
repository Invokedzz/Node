/* const http = require('http'); => Fazendo a importação http.
const port = process.env.PORT || 3000; => Usa uma das duas portas.
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'}); => Esse comando define o status da resposta como OK e o tipo do conteúdo em forma de texto simples.
    res.end('Hello World'); => Envia a string Hello World como corpo da resposta e finaliza a resposta.
});

server.listen(port, () => console.log(`Server started on port ${port}`)); => Esse comando faz com que o servidor comece a escutar na porta especificada. Quando o servidor está pronto, a função de callback é executada. */

