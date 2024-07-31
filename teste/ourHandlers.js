exports.Home = ((req, res) => {
    const anões = [
        {nome: "Ranzinza", idade: 'sim'},
        {nome: "Sonin", idade: 'sei la'},
        {nome: "Velhaco", idade: 50},
    ];
    res.render('home', {dados: anões});
})
exports.About = (req, res) => res.render('about');
exports.Error = ((req, res, next) => {
    res.render('error', {deuErro: true});
});