exports.paginaInicial = (req, res) => {
  req.flash('info', 'Olá mundão');
  req.flash('error', 'Deu errado verme');
  req.flash('success', 'Deu bom. QI Médio 1');
  console.log(req.flash('error'));
  req.session.user = ({nome: 'Pablito', logado: true});
  console.log(req.session.usuario);
  console.log(req.session.user)
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body)
  return;
};
