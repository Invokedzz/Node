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

exports.api = {
    newsletterSignup: (req, res) => {
        console.log('CSRF token: ' + req.body._csrf);
        console.log('Name: ' + req.body.name);
        console.log('Email: ' + req.body.email);
        res.send({result: 'success'});
    },
};

exports.vacationPhotoContest = (req, res) => {
    const now = new Date();
    res.render('contest/vacation-photo', { year: now.getFullYear(), month: now.getMonth() });
  }

exports.vacationPhotoContestProcess = (req, res, fields, files) => {
        console.log('field data: ', fields);
        console.log('files: ', files);
        res.redirect(303, '/contest/vacation-photo-thank-you');
}

exports.vacationPhotoContestProcessError = (req, res, next) => {
    res.render('contest/vacation-photo-error')
}

exports.vacationPhotoContestProcessThankYou = (req, res) => {
    res.render('contest/vacation-photo-thank-you')
  }

exports.newsletterSignupThankYou = (req, res) => res.render('newsletter-signup-thank-you');

exports.newsletter = (req, res) => res.render('newsletter', {csrf: 'CSRF token goes here'});

exports.sectionTest = (req, res) => res.render('00-home');

exports.notFound = (error, req, res, next) => res.render('404');

exports.serverError = (err, req, res, next) => res.render('505');


// O argumento "next" serve para indicar uma funcionalidade de "erro" para o Express.