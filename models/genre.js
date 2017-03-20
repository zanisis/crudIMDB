'use strict';
module.exports = function(sequelize, DataTypes) {
  var Genre = sequelize.define('Genre', {
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Genre.hasMany(models.MovieGenre)
        Genre.belongsToMany(models.Movie, {through:'MovieGenre'})
      }
    }
  });
  return Genre;
};