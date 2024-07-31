const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./lib/handlers');
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

app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/section-test', handlers.sectionTest);
app.get('/newsletter-signup', handlers.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou);
app.use(express.static(__dirname + '/public'))
//app.use(handlers.notFound);
//app.use(handlers.serverError);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Access http://localhost:${port}`);
    });
};

if (require.main !== module) module.exports = app;

// Se executarmos um arquivo JavaScript diretamente com o node, "require.main" será igual ao objeto global "module". Caso contrário, o arquivo será importado de outro módulo.