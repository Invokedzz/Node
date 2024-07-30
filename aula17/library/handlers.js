exports.mainPage = (req, res) => res.render('casa');
exports.abt = (req, res) => res.render('sobre');
exports.error = (err, req, res, next) => res.render('erro');