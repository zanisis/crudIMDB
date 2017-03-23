'use strict'
var express = require('express');
var router = express.Router();
var db = require('../models');
var express = require('express')
var app = express()

/* GET home page. */

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

router.get('/admin', function(req, res, next) {
  db.Movie.findAll()
    .then(function (_movies){
      res.render('admin', { tittle: 'Admin Territory', movies:_movies});//cacth error blm ngerti
    })
    .catch((err)=>{
      res.send(err.message)
    })
});

router.get('/create', function(req, res, next) {
res.render('create', {tittle: 'Create Movie'})
});
router.post('/create',function (req, res, next) {
  db.Movie.create({
    judul: req.body.tittle,
    isi: req.body.desc
  })
    .then(()=>{
      res.redirect('/admin')
    })
})

router.get('/delete/:id',function (req, res, next) {
  db.Movie.destroy({
    where: {id: req.params.id}
  })
  .then(()=>{
    res.redirect('/admin')
  })
})

router.get('/update/:id',function (req, res, next) {
  db.Movie.findById(req.params.id)
    .then(function (_movie){
      res.render('update',
        {
          tittle: 'Page Update',
          movie : _movie
        }
      );
    })
})

router.post('/update/:id',function (req, res, next) {
  let params = req.params.id
  db.Movie
    .update({
      judul: req.body.tittle,
      isi:  req.body.desc
    }, {where: {id: params}})
    .then(()=>{
      res.redirect('/admin')
    })
    .catch((err)=>{
      res.send(err.message)
    })
})

module.exports = router;
