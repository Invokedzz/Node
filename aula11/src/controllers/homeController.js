exports.paginaInicial = (req, res) => {
  req.flash('info', 'Olá mundão');
  req.flash('error', 'Deu errado verme');
  req.flash('success', 'Deu bom. QI Médio 1');
  console.log(req.flash('error'));
  req.session.user = ({nome: 'Pablito', logado: true});
  console.log(req.session.usuario);
  console.log(req.session.user)
  res.render('index', {
    titulo: 'Este será o título da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body)
  return;
};
