const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('../../config/key');
const { User } = require('../../models/user');
const { authMiddleware } = require('../../middleware/auth');

mongoose
  .connect(config.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'))
  .catch(err => {
    console.log('DB NOT connected');
    console.error(err);
  });

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(cookieParser());

// GET /users/auth
router.get('/auth', authMiddleware, (req, res) => {
  res.status(200).json({
    _id: req._id,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
  });
});

// POST /users/register
router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });

    return res.status(200).json({
      success: true,
      userData: doc,
    });
  });
});

// POST /users/login
router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: 'Auth failed, email not found',
      });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: 'Wrong password',
        });
      }
    });

    user.generateToken((err, user) => {
      if (err) return res.status(400).send(err);
      res
        .cookie('x_auth', user.token)
        .status(200)
        .json({ loginSuccess: true });
    });
  });
});

// GET /users/logout
router.get('/logout', authMiddleware, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).send({
      success: true,
    });
  });
});

module.exports = router;
