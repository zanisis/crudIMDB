'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    judul: DataTypes.TEXT,
    isi: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Movie.hasMany(models.MovieGenre)
        Movie.belongsToMany(models.Genre, {through:'MovieGenre'})
        Movie.hasMany(models.Vote)
        Movie.belongsToMany(models.User, {through:'Vote'})
      }
    }
  });
  return Movie;
};