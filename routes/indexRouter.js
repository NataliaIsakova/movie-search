const express = require('express');
const Home = require('../views/Home');
const renderTemplate = require('../tools/renderTamplate');
const { Movie, User, Favorit } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await fetch('http://www.omdbapi.com/?apikey=a69781f9&s=titanic');
    const data = await response.json();
    renderTemplate(Home, { login: req.session.login, data: data.Search }, res);
  } catch (error) {
    res.send(`${error}`);
  }
});

router.post('/', async (req, res) => {
  try {
    const { login } = req.session;
    const {
      title, year, poster, num,
    } = req.body;
    const movie = await Movie.create({
      title, year, poster, num,
    });
    const user = await User.findOne({ where: { login } });
    const favorit = await Favorit.create({ movieId: movie.id, userId: user.id });
    res.send('Данные успешно сохранены');
  } catch (error) {
    console.error(error);
    res.send('Произошла ошибка при сохранении');
  }
});

module.exports = router;
