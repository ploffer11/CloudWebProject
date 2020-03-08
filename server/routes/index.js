const express = require('express');
const router = express.Router();

const users = require('./users/index');
const drives = require('./drives/index');

router.get('/', (req, res) => {
  res.json({ serverOn: 'true' });
});

router.use('/users', users);
router.use('/drives', drives);

module.exports = router;
