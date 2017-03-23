'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define('Vote', {
    vote: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Vote.belongsTo(models.User)
        Vote.belongsTo(models.Movie)
      }
    }
  });
  return Vote;
};