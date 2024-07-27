const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const port = process.env.PORT || 3000;
const fortune = require('./library/fortune');

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about', {fortune: fortune.getFortune()});
});

/* res.render('about', { fortune: fortune.getFortune() }): Renderiza o template about.handlebars, passando um objeto com uma chave fortune. O valor de fortune é obtido chamando fortune.getFortune(), que retorna uma mensagem aleatória de fortuna. */

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

app.listen(port, function () {
    console.log(`Iniciar o server em ${port}`);
});
