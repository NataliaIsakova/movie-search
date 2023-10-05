'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Movie }) {
      this.belongsToMany(Movie, { through: 'Favorit', foreignKey: 'userId' });
    }
  }
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};