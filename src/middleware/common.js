const { sequelize } = require('../../db/models');

const DBConnectionCheck = async (req, res, next) => {
    try {
      await sequelize.authenticate();
      console.log('БД подключена!');
      next();
    } catch (error) {
      console.log('БД не подключена', error);
      res.send(`ERROR DB ==> ${error}`);
    }
  };

  const checkUser = (req, res, next) => {
    if (req.session.login) {
      next();
    } else {
      res.redirect('/');
    }
  };

  module.exports = { DBConnectionCheck, checkUser};
  
