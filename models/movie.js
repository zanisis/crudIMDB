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
    },
    instanceMethods: {
      getAverageVotes: function(callback){
          this.getVotes().then(function(votes){
            let a=0; let jumlah=0;
            votes.forEach(function (vote){
              jumlah+=vote.vote;
              a++;
            })
            let avg = jumlah / a;
            // console.log("Virtual1: ", this.averageVotes)
            this.averageVotes = avg
            // console.log("Virtual2: ", this.averageVotes)
          })
      }
    }

  });
  return Movie;
};