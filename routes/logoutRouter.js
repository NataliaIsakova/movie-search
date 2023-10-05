const express = require('express');

const router = express.Router();
const { checkUser } = require('../src/middleware/common');

router.get('/', checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('Movie');
    res.redirect('/');
  });
});

module.exports = router;
