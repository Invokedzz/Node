const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const vanillaExports = require('./vanillaExports');

app.engine('handlebars', engine({
    defaultLayout: 'main',
    helpers: {
        section: function(name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        },
    },
}));
app.set('view engine', 'handlebars');

app.get('/', vanillaExports.Home);
app.get('/about', vanillaExports.About);


if (require.main === module) {
    app.listen(port, function () {
        console.log(`Access http://localhost:${port}`);
    });
}

if (require.main !== module) exports.module = app;