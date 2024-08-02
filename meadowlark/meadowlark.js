const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./lib/handlers');
const bodyParser = require('body-parser');
const multiparty = require('multiparty');
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
app.use(bodyParser.json());

app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/section-test', handlers.sectionTest);
app.get('/newsletter', handlers.newsletter);
app.get('/newsletter-signup', handlers.newsletterSignup);
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou);
app.get('/contest/vacation-photo', handlers.vacationPhotoContest);


app.post('/api/newsletter-signup', handlers.api.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.post('/contest/vacation-photo/:year/:month', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        if (err) return res.status(500).send({error: err.message});
        handlers.vacationPhotoContestProcess(req, res, fields, files);
    });
});


app.use(express.static(__dirname + '/public'))
app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Access http://localhost:${port}`);
    });
};

if (require.main !== module) module.exports = app;

// Se executarmos um arquivo JavaScript diretamente com o node, "require.main" será igual ao objeto global "module". Caso contrário, o arquivo será importado de outro módulo.