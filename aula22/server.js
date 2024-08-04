const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./serverHandlers');
const bodyParser = require('body-parser');
const multiparty = require('multiparty');

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/photocontest', handlers.PhotoContest);
app.post('/contest/vacation-photo/:year/:month', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, (err, fields, files) => {
        if (err) return res.status(500);
        handlers.PhotoContestProcess(req, res, fields, files);
    });
});
app.get('./views/contest/photo-contest-thankyou', handlers.PhotoContestThankYou);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Access http://localhost:${port}`);
    });
}

if (require.main !== module) module.exports = app;