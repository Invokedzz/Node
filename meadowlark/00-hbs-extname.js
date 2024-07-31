const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./lib/handlers');
app.engine('handlebars', engine({
    defaultLayout: '00-main',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        },
    },
}));

app.set('view engine', 'handlebars');

app.get('/', handlers.sectionTest);

app.listen(port, () => {
    console.log(`Access http://localhost:${port}`);
});