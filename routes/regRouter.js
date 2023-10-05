const express = require('express');
const bcrypt = require('bcrypt');
const Registration = require('../views/Registration');
const renderTemplate = require('../tools/renderTamplate');
const { User } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    renderTemplate(Registration, {}, res);
  } catch (error) {
    res.send(`${error}`);
  }
});

router.post('/', async (req, res) => {
  const { login, password, email } = req.body;
  console.log('.........', login, password, email);// достаем данные из тела запроса
  const user = await User.findOne({ where: { login } });// ищем базе юзера

  if (user) {
    res.json('Такой пользователь уже существует');// если такой пользователь есть, отправляем сооб
  } else {
    const hash = await bcrypt.hash(password, 10);// если нет, кэшируем пароль
    const newUser = await User.create({ login, password: hash, email });// создаем нового пользователя
    // в него вкладываем имя столбца: данный из инпута
console.log(req.session);
    req.session.login = newUser.login;
    req.session.userId = newUser.id;
    // присваимваем в сессию  значение, которое надо
    req.session.save(() => { // сохраняем сессию
      res.json({ message: 'Пользователь зарегистрирован', logine: req.session.login, email: req.session.email });
    });// отправлям ответ с сообщение и именим пользователя взятое из сессии
  }
});

module.exports = router;
