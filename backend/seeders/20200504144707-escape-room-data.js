'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('escaperooms', [{
      name: 'AlcatraZ',
      description: 'Imagine yourself in one of the most heavily guarded jails in history.',
      price: 36,
      maxPlayerCount: 6,
      playTime: 60,
      setupTime: 30,
      minimumPlayerAge: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'The Caretaker',
      description: 'Can you save the daughter of the school director from the grasp of The Caretaker?',
      price: 36,
      maxPlayerCount: 6,
      playTime: 60,
      setupTime: 45,
      minimumPlayerAge: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Engine Room',
      description: 'You and your team are locked inside the Engine Room of an old Russian nuclear submarine.',
      price: 36,
      maxPlayerCount: 5,
      playTime: 60,
      setupTime: 30,
      minimumPlayerAge: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('escaperooms', null, {});
  }
};
