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
    return queryInterface.bulkInsert('Genres', [
    {
      genre: 'Adventures',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      genre: 'Romance',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      genre: 'Action',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      genre: 'Thriller',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      genre: 'Drama',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      genre: 'Sport',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      genre: 'Horror',
      createdAt : new Date(),
      updatedAt : new Date()
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
