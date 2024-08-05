const VALID_EMAIL_REGEX = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@' +
    '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
    '(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$');

exports.loginPage = (req, res) => res.render('loginPage');
exports.loginPageProcess = (req, res) => {
    console.log('Name: ' + req.body.name);
    console.log('Email: ' + req.body.email);
    const { email } = req.body;
    if (VALID_EMAIL_REGEX.test(email)) {
        req.session.flash = {
            type: 'success',
            intro: 'Thanks!'
        }
        return res.redirect(303, '/loginPage/thanks');
    }

    if (!VALID_EMAIL_REGEX.test(email)) {
        req.session.flash = {
            type: 'danger',
            intro: 'validation error',
        };
        return res.redirect(303, '/');
    }

}
exports.loginThanks = (req, res) => res.render('loginThanks');
