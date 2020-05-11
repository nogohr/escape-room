'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('escaperooms', [{
      name: 'Escape Room 1',
      maxPlayerCount: 6,
      playTime: 60,
      setupTime: 45,
      minimumPlayerAge: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Escape Room 2',
      maxPlayerCount: 10,
      playTime: 60,
      setupTime: 30,
      minimumPlayerAge: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Escape Room 3',
      maxPlayerCount: 6,
      playTime: 60,
      setupTime: 60,
      minimumPlayerAge: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Escape Room 4',
      maxPlayerCount: 4,
      playTime: 60,
      setupTime: 30,
      minimumPlayerAge: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Escape Room 5',
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
