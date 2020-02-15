const express = require('express');
const router = express.Router();

const { users } = require('./users/index');

router.get('/', (req, res) => {
  res.json({ serverOn: 'true' });
});

router.use('/users', users);

module.exports = router;
