const router = require("express").Router();
const passport = require("passport");

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) return next(err);
        if (!user) return res.json(info.message);
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            return res.json({ username: user.username, isLoggedIn: true });
        });
    })(req, res, next);
});

module.exports = router;
