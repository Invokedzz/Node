const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./handlers');
const bodyParser = require('body-parser');
app.engine('handlebars', engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/error', handlers.error);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});