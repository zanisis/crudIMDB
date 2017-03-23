var express = require('express');
var router = express.Router();
var db = require('../models');



//MENGAMBIL FILM SESUAI ID DAN MEMBUAT TAB
router.get('/:id', function(req, res, next) {
  db.Movie.findById(req.params.id)
          .then(function (_movie){
            res.render('vote', { movie : _movie });
              })
});



//NGEVOTE SEBUAH FILM... NAMA SESEORANG HARUS ADA DALAM DB
router.post('/add/:id', function(req, res, next) {
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
                                res.redirect('index', { movies:_movies});
                                  })
                    )

                    //GA ADA NILAINYA
                    .catch(function (err){
                      db.Movie.findAll()
                              .then(function (_movies){
                                res.redirect('index', { movies:_movies});
                                  })
                    })

          })

          //GA ADA NAMANYA
          .catch(function (err){
            db.Movie.findAll()
                    .then(function (_movies){
                      res.redirect('index', { movies:_movies});
                        })
          })

});

module.exports = router;
