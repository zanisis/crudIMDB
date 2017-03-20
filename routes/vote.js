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


// router.get('/:id', function(req, res, next) {
//   db.Movie.findById(req.params.id)
//           .then(function (_movies){
//             res.render('vote', { test:req.params.id});
//               })
// });

router.get('/:id', function(req, res, next) {
  db.Movie.findById(req.params.id)
          .then(function (_movie){
            res.render('vote', { movie : _movie });
              })
});

router.post('/:id', function(req, res, next) {

  db.User.findOne({ where: { name : req.body.inputname } })
          .then(function (_user) {
            let nilaiVote = {
              vote : req.body.vote,
              MovieId : req.params.id,
              UserId : _user.id
            }
            db.Vote.create(nilaiVote)
                    .then(
                      db.Movie.findAll()
                              .then(function (_movies){
                                res.render('index', { movies:_movies});//cacth error blm ngerti
                                  })
                    )
          })
          .catch(function (err){
            alert("I am an alert box!");
          })

  //res.send(req.body.vote)
  //res.render('index', { movies:_movies });
  // db.Movie.findById(req.params.id)
  //         .then(function (_movie){
  //           res.render('vote', { movie : _movie });
  //             })
});

//CREATE
// model.Student.create(siswa)
//       .then((instance)=>{
//         console.log("Data Berhasil diinput")
//       })
//       .catch( (err) => {
//         console.log("ini error: ", err.message)
//       } )

module.exports = router;
