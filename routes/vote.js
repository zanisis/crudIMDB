var express = require('express');
var router = express.Router();
var db = require('../models');

//MENGAMBIL FILM SESUAI ID DAN MEMBUAT TAB
router.get('/:id', function(req, res, next) {
  db.Movie.findById(req.params.id)
          .then(function (_movie){
              db.User.findAll()
                     .then(function(_users){
                       res.render('vote', { movie : _movie, users : _users});
                     })
    })
});

//NGEVOTE SEBUAH FILM... NAMA SESEORANG HARUS ADA DALAM DB
router.post('/:id', function(req, res, next) {
  // db.User.findOne({where: {name: req.body.inputname}})
  //   .then((_user)=>{
      let nilaiVote = {
        vote: req.body.vote,
        MovieId: req.params.id,
        UserId: req.params.inputname
      }
      db.Vote.create(nilaiVote)
        .then(()=>{
          res.redirect('/')
        })
        .catch((err)=>{
          res.send(err.message)
        })
    // })
});


router.post('/findbytag', function(req, res, next) {
  db.Movie.findById(req.params.id)
          .then(function (_movie){
              db.User.findAll()
                     .then(function(_users){
                       res.render('vote', { movie : _movie, users : _users});
                     })
    })
});

module.exports = router;
