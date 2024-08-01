const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./moduleHandlers');
const bodyParser = require('body-parser');

app.engine('handlebars', engine({
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        },
    },
}));

app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', handlers.Home);
app.get('/about', handlers.About);
app.get('/commit', handlers.commitPage);
app.post('/commit/process', handlers.commitSignup);


app.use('', handlers.serverError);
app.use('', handlers.error404);

if (require.main === module) {
    app.listen(port, function () {
        console.log(`Acesse http://localhost:${port}`);
    });
}

if (require.main !== module) module.exports = app;