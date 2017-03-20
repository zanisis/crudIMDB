'use strict';
module.exports = function(sequelize, DataTypes) {
  var MovieGenre = sequelize.define('MovieGenre', {
    MovieId: DataTypes.INTEGER,
    GenreId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        MovieGenre.belongsTo(models.Genre)
        MovieGenre.belongsTo(models.Movie)
      }
    }
  });
  return MovieGenre;
};