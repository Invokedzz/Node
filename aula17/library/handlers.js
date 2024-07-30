exports.mainPage = (req, res) => res.render('casa');
exports.abt = (req, res) => res.render('sobre');
exports.error = (req, res, next => {
    res.status(404);
    res.send('Deu erro aqui');
});