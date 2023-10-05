const express = require('express');
const bcrypt = require('bcrypt');
const Profile = require('../views/Profile');
const renderTemplate = require('../tools/renderTamplate');
const { User } = require('../db/models');
const { Movie } = require ('../db/models');
const { Favorit } = require('../db/models');


const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { login, userId } = req.session;

   
    const user = await User.findOne({
      where: { id: userId },
      include: [{ model: Movie }],
    });
    const data = user.Movies;
    console.log('=======', data);
    renderTemplate(Profile, { login }, res);
  } catch (error) {
    res.send(`${error}`);
  }
});


module.exports = router;