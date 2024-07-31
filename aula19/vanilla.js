const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const vanillaExports = require('./vanillaExports');
const weather = require('./lib/middleware/weather');

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
app.use(function(req, res, next) {
    res.locals.partials = (res.locals.partials) ? res.locals.partials : {};

    res.locals.partials.weatherContext = weather.getWeatherData();

    next();
});
app.set('view engine', 'handlebars');
app.get('/', vanillaExports.Home, {weather: weather});
app.get('/about', vanillaExports.About);


if (require.main === module) {
    app.listen(port, function () {
        console.log(`Access http://localhost:${port}`);
    });
}

if (require.main !== module) exports.module = app;
