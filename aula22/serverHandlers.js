exports.home = (req, res) => res.render('home');
exports.about = (req, res) => res.render('about');

exports.PhotoContest = (req, res) => {
    const now = new Date();
    res.render('contest/photo-contest', {year: now.getFullYear(), month: now.getMonth()});
}

exports.PhotoContestThankYou = (req, res) => res.render('/contest/photo-contest-thankyou');

exports.PhotoContestProcess = (req, res, fields, files) => {
    console.log('field data: ', fields);
    console.log('files: ', files);
    res.redirect(303, '/contest/photo-contest-thankyou');
}

exports.PhotoContestThankYou = (req, res) => res.render('./views/contest/photo-contest-thankyou');