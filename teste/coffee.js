const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./ourHandlers');

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.get('/', handlers.Home);
app.get('/about', handlers.About);
app.use('', handlers.Error);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Access http://localhost:${port}`);
    });
}

if (require.main !== module) module.exports = app;