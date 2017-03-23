'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    judul: DataTypes.TEXT,
    isi: DataTypes.TEXT,
    averageVotes: DataTypes.VIRTUAL
  }, {
    classMethods: {
      testAja: function(){
        return "Hello World"
      },
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
        // Movie.findById(this.id).then(function(movie){
          this.getVotes().then(function(votes){
            let a=0; let jumlah=0;
            votes.forEach(function (vote){
              jumlah+=vote.vote;
              a++;
            })
            let avg = jumlah / a;
            // this.averageVotes = avg;
            console.log("Virtual1: ", this.averageVotes)
            this.averageVotes = avg
            console.log("Virtual2: ", this.averageVotes)

          })
        // })
      }
    }

  });
  return Movie;
};