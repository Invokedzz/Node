const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('abt');
});

app.use((req, res, err) => {
    if (err) {
        res.render('404');
        res.status(404);
        console.error(err);
        return;
    }

    return app.get('/', (req, res) => {
        res.render('home');
    });

});

app.listen(port, () => {
    console.log(`Access http://localhost:${port}`);
});

// O "main.handlebars" é a base do nosso Front-End. Nós começamos a iniciá-lo no "app.engine" e "app.set".