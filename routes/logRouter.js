const express = require('express');
const bcrypt = require('bcrypt');
const renderTemplate = require('../tools/renderTamplate');
const { User } = require('../db/models');
const Login = require('../views/Login');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    renderTemplate(Login, null, res);
  } catch (error) {
    res.send(`${error}`);
  }
});

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  console.log(login, password);
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.login;
        req.session.userId = user.id;
        req.session.save(() => {
          res.json({ msg: 'Пользователь авторизован!', login: req.session.login });
        });
      } else {
        res.json({ msg: 'Неверный пароль' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден!' });
    }
  } catch (error) {
    console.log(error);
    res.json(`Error ------>${error}`);
  }
});

module.exports = router;
