'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorit extends Model {
    static associate() {

    }
  }
  Favorit.init({
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorit',
  });
  return Favorit;
};