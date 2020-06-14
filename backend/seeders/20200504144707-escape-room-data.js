'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('escaperooms', [{
      name: 'Escape Room 1',
      price: 80,
      maxPlayerCount: 6,
      playTime: 60,
      setupTime: 45,
      minimumPlayerAge: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Escape Room 2',
      price: 70,
      maxPlayerCount: 10,
      playTime: 60,
      setupTime: 30,
      minimumPlayerAge: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Escape Room 3',
      price: 75,
      maxPlayerCount: 6,
      playTime: 60,
      setupTime: 60,
      minimumPlayerAge: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Escape Room 4',
      price: 90,
      maxPlayerCount: 4,
      playTime: 60,
      setupTime: 30,
      minimumPlayerAge: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Escape Room 5',
      price: 150,
      maxPlayerCount: 8,
      playTime: 120,
      setupTime: 60,
      minimumPlayerAge: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('escaperooms', null, {});
  }
};
