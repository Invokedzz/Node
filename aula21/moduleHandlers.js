exports.Home = (req, res) => res.render('home');

exports.commitPage = (req, res) => res.render('commit');

exports.commitSignup = (req, res) => {
    console.log(`Name: ` + req.body.name);
    console.log(`Email: ` + req.body.email);
    res.redirect(303, '/about'); // Utilizamos "req.body" em casos envolvendo "POST".
}

exports.About = (req, res) => res.render('about');

exports.serverError = (err, req, res, next) => {
    res.render('500');
    res.status(500);
};

exports.error404 = (err, req, res, next) => {
    res.render('404');
    res.status(404);
};