'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('MovieGenres', [{
      MovieId : 1,
      GenreId : 2,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 1,
      GenreId : 5,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 1,
      GenreId : 4,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 2,
      GenreId : 5,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 1,
      GenreId : 7,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 3,
      GenreId : 1,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 3,
      GenreId : 8,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 4,
      GenreId : 2,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 4,
      GenreId : 3,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 4,
      GenreId : 4,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 5,
      GenreId : 4,
      createdAt : new Date(),
      updatedAt: new Date()
    },
    {
      MovieId : 6,
      GenreId : 7,
      createdAt : new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

  }
};
