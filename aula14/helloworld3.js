/*const http = require('http');
const port = process.env.PORT || 3000;
const fs = require('fs');

O 'fs' é um módulo do Node para leitura de arquivos encontrados dentro do sistema de arquivos.

function serveStaticFile (res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            return res.end('500 - Internal Error');
        }
        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
    });
}

> O res é um objeto de resposta HTTP;
> Path é um caminho para o arquivo que será lido e enviado;
> contentType é um tipo de conteúdo para o cabeçalho da resposta.
> A função tenta ler o arquivo com 'fs.readFile'. Se ocorrer um erro, a respota é um erro 500. Caso contrário, o arquivo é enviado com o código de resposta e tipo de conteúdo especificado.
> Quando combinamos __dirname com path (__dirname + path) estamos construindo o caminho absoluto para o arquivo que desejamos ler.
> Data é o conteúdo do arquivo lido a partir do caminho especificado. Nessa função, data faz o papel de ser resposta para o cliente HTTP. 


const servidor = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case "":
            serveStaticFile(res, '/public/home.html', 'text/html');
             break;
        case '/about': 
            serveStaticFile(res, '/public/img/logo.png', 'image/png');
             break;
        default: '/img/logo.png':
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
             break;
    }
});

servidor.listen(port, function () {
    console.log(`O servidor se encontra em ${port}`);

    Aqui o servidor é escutado na porta especificada. Nesse caso, a porta 3000.

});

*/