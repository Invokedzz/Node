const http = require('http');
const port = process.env.PORT || 3000;
const fs = require('fs');

function asyncFile (res, path, contentType) {
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            return res.end('500 - Internal Error');
        }
        res.writeHead(200, {'Content-Type': contentType});
        return res.end(data);
    });
}

const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case "":
        asyncFile(res, '/public/text.html', 'text/html');
        break;
        case "/about":
        asyncFile(res, '/public/about.html', 'about/html');
        break;
    }
});

server.listen(port, () => {
    console.log(`Server being executed on ${port}`);
});
