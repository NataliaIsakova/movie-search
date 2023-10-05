'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate({ User }) {
      this.belongsToMany(User, { through: 'Favorit', foreignKey: 'movieId' });
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.TEXT,
    poster: DataTypes.TEXT,
    num: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};