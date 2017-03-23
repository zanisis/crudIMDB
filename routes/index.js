var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/', function(req, res, next) {
  db.Movie.findAll()
  .then(function (_movies){

    var promises = []
    _movies.forEach(function(_movie) {
      var p = new Promise(function(resolve, reject) {
        _movie.getVotes()
        .then(function (_votes){
          let totalScores=0; let jumlahVoters=0;
          _votes.forEach(function (vote){
            totalScores += vote.vote
            jumlahVoters++;
          })

          let avg = totalScores / jumlahVoters
          _movie["rata"] = avg;

          resolve(_movie)
        })
        .catch(function(err) {
          reject(err)
        })
      })

      promises.push(p)
    })

    Promise.all(promises)
    .then(function() {
      res.render('index', { movies :_movies});
    })
  })
});

module.exports = router;
