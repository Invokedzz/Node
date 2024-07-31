const fortune = require('./fortune');

exports.home = (req, res) => res.render('home');

exports.about = (req, res) => res.render('about', {fortune: fortune.getFortune()});

exports.newsletterSignup = (req, res) => res.render('newsletter-signup', {csrf: 'CSRF token goes here'});

exports.newsletterSignupProcess = (req, res) => {
    console.log('Form: ' + req.query.form);
    console.log('CSRF token (from hidden form field: ' + req.body._csrf);
    console.log('Name (from visible form field: ' + req.body.name);
    console.log('Email (from visible form field: ' + req.body.email);
    res.redirect(303, '/newsletter-signup/thank-you');
}

exports.newsletterSignupThankYou = (req, res) => res.render('newsletter-signup-thank-you');

exports.sectionTest = (req, res) => res.render('00-home');

exports.notFound = (error, req, res, next) => res.render('404');

exports.serverError = (err, req, res, next) => res.render('505');


// O argumento "next" serve para indicar uma funcionalidade de "erro" para o Express.