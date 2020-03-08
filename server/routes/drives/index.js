const express = require('express');
const passport = require('passport');
const router = express.Router();

/* GET auth callback. */
router.get('/signin', function(req, res, next) {
  passport.authenticate('azuread-openidconnect', {
    response: res,
    prompt: 'login',
    failureRedirect: '/',
    failureFlash: true,
    successRedirect: '/',
  })(req, res, next);
});

router.post(
  '/callback',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', {
      response: res,
      failureRedirect: '/',
      failureFlash: true,
    })(req, res, next);
  },
  function(req, res) {
    req.flash('error_msg', {
      message: 'Access token',
      debug: req.user.accessToken,
    });
    res.redirect('/');
  },
);

router.get('/signout', function(req, res) {
  req.session.destroy(function(err) {
    req.logout();
    res.redirect('/');
  });
});

module.exports = router;
