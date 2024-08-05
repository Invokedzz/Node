const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const flashMiddleware = require('./lib/middleware/flash');
const { engine } = require('express-handlebars');
const handlers = require('./lib/handlers');
const cookieParser = require('cookie-parser');
const credentials = require('./credentials');
const expressSession = require('express-session');

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

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
}));
app.use(cookieParser(credentials.cookieSecret));
app.use(flashMiddleware);

// Nossos middlewares (Um para pegar info. dos inputs e outro para cookies).
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas de GET
app.get('/', handlers.home);
app.get('/section-test', handlers.sectionTest);
app.get('/newsletter', handlers.newsletter);
app.get('/newsletter-signup', handlers.newsletterSignup);
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou);
app.get('/contest/vacation-photo', handlers.vacationPhotoContest);
app.get('/contest/vacation-photo-thank-you', handlers.vacationPhotoContestProcessThankYou);

// Rotas de POST
app.post('/api/newsletter-signup', handlers.api.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.post('/contest/vacation-photo/:year/:month', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        if (err) return handlers.vacationPhotoContestProcessError(req, res, err.message);
        handlers.vacationPhotoContestProcess(req, res, fields, files);
    });
});

app.use(express.static(path.join(__dirname, 'public')));
//app.use(handlers.notFound);
//app.use(handlers.serverError);

// Middleware de erro genérico
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Access http://localhost:${port}`);
    });
}

if (require.main !== module) module.exports = app;


// Se executarmos um arquivo JavaScript diretamente com o node, "require.main" será igual ao objeto global "module". Caso contrário, o arquivo será importado de outro módulo.