var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   db.Movie.findById(1)
//               .then(function (_movies){
//                 _movies.getGenres()
//                         .then(function(_genres){
//                             //console.log(genre.genre)
//                             res.render('index', { title: 'Expresso', movies:_movies, genres : _genres });
//                         })
//                         //cacth error blm ngerti
//               })
//
// });

// model.Teacher.findById(3)
//             .then(function (teachers){
//               teachers.getStudents()
//                       .then(function(students){
//                         students.forEach(function(student){
//                           console.log(student.first_name+' '+student.last_name)
//                         })
//                       })
//             })




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
      console.log("-----",_movies);
      res.render('index', { movies :_movies});
    })

  })
});

module.exports = router;
