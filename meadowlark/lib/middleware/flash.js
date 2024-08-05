module.exports = (req, res, next) => {
    // se houver uma mensagem flash, transfira-a
    // para o contexto e depois a remova
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();
}