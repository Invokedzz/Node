const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const cookiesHandlers = require('./cookiesHandlers');

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
app.use(bodyParser.urlencoded({entended: true}));
app.use(bodyParser.json());

// Routes (GET):
app.get('/', cookiesHandlers.Homenewsletter);
app.get('/newsletter-signup', cookiesHandlers.newsletterSignup);
app.get('/newsletter-signup/come-back', cookiesHandlers.newsletterThanks);
//

// Routes (POST):
app.post('/newsletter-signup/process', cookiesHandlers.newsletterSignupProcess);
//
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Access http://localhost:${port}`);
    });
}

if (require.main !== module) module.exports = app;