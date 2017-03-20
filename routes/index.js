'use strict'
var express = require('express');
var router = express.Router();
var db = require('../models');
var express = require('express')
var app = express()

// app.get('/change', function (req, res) {
//   res.send('Hello World!')
// })
//
// app.listen(2800)


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
router.get('/', function(req, res, next) {
  db.Movie.findAll()
          .then(function (_movies){
            res.render('index', { movies:_movies});//cacth error blm ngerti
              })
});

router.get('/admin', function(req, res, next) {
  db.Movie.findAll()
          .then(function (_movies){
            res.render('admin', { tittle: 'Admin Territory', movies:_movies});//cacth error blm ngerti
              })
// res.render('admin', {tittle: 'Admin Territory'})
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

router.get('/create/:id',function (req, res, next) {
  db.Movie.destroy({
    where: {id: req.params.id}
  })
  .then(()=>{
    res.redirect('/admin')
  })
})


module.exports = router;
