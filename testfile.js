"use strict"
let db = require('./models')


// db.Movie.findById(1)
//             .then(function (Movies){
//               Movies.getGenres()
//                       .then(function(genres){
//                         genres.forEach(function(genre){
//                           console.log(genre.genre)
//                         })
//                       })
//             })
db.Movie.findAll()
        .then(function (_movies){
          _movies.forEach(function (_movie){
              _movie.getAverageVotes(function(avg){
                  console.log("Berhasil....", avg);
              })
            })
          })


            // model.Student.getAllData(function(datas){
            //   datas.forEach(data=>{
            //       console.log(data.dataValues.fullName)
            //     })
            //
            //   })


// db.Movie.testAja() // class Method
