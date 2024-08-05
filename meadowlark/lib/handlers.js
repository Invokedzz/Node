const VALID_EMAIL_REGEX = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@' +
    '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
    '(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$');

// Fake "newsletter signup interface":

/*class NewsletterSignup {
    constructor({name, email}) {
        this.name = name;
        this.email = email;
    }

    async save() {
        // Seria aqui onde teríamos o trabalho de salvar o banco de dados. Já que o método é assíncrono, iria retornar uma Promise. E já que não estamos retornando nenhum erro, ele iria resolver.
    }

} */

exports.home = (req, res) => res.render('home');

exports.newsletterSignup = (req, res) => res.render('newsletter-signup', {csrf: 'CSRF token goes here'});

exports.newsletterSignupProcess = (req, res) => {
    const { email } = req.body;
    if (!VALID_EMAIL_REGEX.test(email)) {
        req.session.flash = {
            type: 'danger',
            intro: 'Validation error!',
            message: 'The email address you sent was not valid',
        };
        return res.redirect(303, '/newsletter-signup');
    }

    if (VALID_EMAIL_REGEX.test(email)) {
        req.session.flash = {
            type: 'success',
            intro: 'Thanks!',
            message: 'You have been signed for the newsletter',
        }
        return res.redirect(303, '/newsletter-signup/thank-you');
    } 

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

/*exports.notFound = (req, res, next) => res.status(404).render('404');

exports.serverError = (err, req, res, next) => {
    console.error(err.stack); // Log de erro
    res.status(500).render('505');
};
*/

// O argumento "next" serve para indicar uma funcionalidade de "erro" para o Express.

/* new NewsletterSignup({ name, email }).save()
.then(() => {
  req.session.flash = {
    type: 'success',
    intro: 'Thank you!',
    message: 'You have now been signed up for the newsletter.',
  }
  return res.redirect(303, '/newsletter-archive')
})
.catch(err => {
  req.session.flash = {
    type: 'danger',
    intro: 'Database error!',
    message: 'There was a database error; please try again later.',
  }
  return res.redirect(303, '/newsletter-archive')
})
} Quando formos utilizar a class */