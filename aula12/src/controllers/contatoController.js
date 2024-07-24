exports.paginaInicial = (req, res) => {
  res.render('index2', {
    titulo: 'Página de contato',
  });
  return;
};

exports.trataContato = (req, res) => {
  res.send(req.body);
  return;
}