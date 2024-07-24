exports.middlewareContato = (req, res, next) => {
    res.locals.variavel = 'Variável de contato. Olá!';
    next();
}