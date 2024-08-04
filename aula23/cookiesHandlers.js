exports.Homenewsletter = (req, res) => res.render('newsletter');
exports.newsletterSignup = (req, res) => {
    console.log('CSRF token: ' + req.body._csrf);
    console.log('Name: ' + req.body.name);
    console.log('Email: ' + req.body.email);
    res.render('newsletter-signup')
}

exports.newsletterThanks = (req, res) => {
    res.render('newsletter-signup-thanks');
}

exports.newsletterSignupProcess = (req, res) => {
    console.log('Name: ' + req.body.name);
    console.log('Email: ' + req.body.email);
    res.redirect(303, '/newsletter-signup/come-back');
}

