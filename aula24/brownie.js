const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const flashMiddleware = require('./library/middleware/flash');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const credentials = require('./credentials');

// App.use
app.use(cookieParser());
app.use(expressSession({
    saveUninitialized: false,
    resave: false,
    secret: credentials.cookieSecret,
}));
app.use(flashMiddleware);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//


app.engine('handlebars', engine({
    defaultLayout: 'main',
    helpers: {
        session: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');


// Our handlers (exports):
const cookieHandlers = require('./library/cookiesHandlers');
app.get('/', cookieHandlers.loginPage);
app.get('/loginPage/thanks', cookieHandlers.loginThanks);
//

// POST handlers (exports):
app.post('/loginPage/process', cookieHandlers.loginPageProcess);
//

const port = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
}

if (require.main !== module) module.exports = app;