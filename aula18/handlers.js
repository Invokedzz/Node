exports.home = (req, res) => res.render('home');

exports.about = (req, res) => res.render('about');

exports.error = (req, res, next) => res.render('error');

