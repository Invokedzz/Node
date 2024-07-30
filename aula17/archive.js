// npm install --save-dev puppeteer; npm install --save-dev portfinder; npm install --save-dev jest; "test": "jest" (nos scripts);  npm test -- --watch => Comandos importantes!!


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./library/handlers');

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.get('/', handlers.mainPage);
app.get('/about', handlers.abt);
app.use(handlers.error);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Access http://localhost:${port}`);
    });
};

if (require.main !== module) module.exports = app;