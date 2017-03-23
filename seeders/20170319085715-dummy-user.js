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
    return queryInterface.bulkInsert('Users', [
    {
      name: 'michael',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'zani',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'juan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'arfan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'oscar',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'daniel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'edim',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'windy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'akbar',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'rifky',
      createdAt: new Date(),
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
