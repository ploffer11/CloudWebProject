const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('../../config/key');
const { User } = require('../../models/user');
const { authMiddleware } = require('../../middleware/auth');
const { autoHelper } = require('../../models/authHelper');

// GET /drives/
router.get('/', (req, res) => {
  if (req.cookies.REFRESH_TOKEN_CACHE_KEY === undefined) {
    console.log('token is undefined');
  } else {
    console.log('token is good');
  }
});

// GET /drives/login
router.get('/login', (req, res) => {
  if (req.query.code !== undefined) {
    authHelper.getTokenFromCode(req.query.code, function(
      e,
      access_token,
      refresh_token,
    ) {
      if (e === null) {
        res.cookie(authHelper.ACCESS_TOKEN_CACHE_KEY, access_token);
        res.cookie(authHelper.REFRESH_TOKEN_CACHE_KEY, refresh_token);
        res.redirect('/');
      } else {
        console.log(JSON.parse(e.data).error_description);
        res.status(500);
        res.send();
      }
    });
  } else {
    res.render('login', { auth_url: authHelper.getAuthUrl() });
  }
});

module.exports = router;
