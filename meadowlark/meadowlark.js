const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./lib/handlers');

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.get('/', handlers.home);
app.get('/about', handlers.about);
app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Access http://localhost:${port}`);
    });
};

if (require.main !== module) module.exports = app;

// Se executarmos um arquivo JavaScript diretamente com o node, "require.main" será igual ao objeto global "module". Caso contrário, o arquivo será importado de outro módulo.