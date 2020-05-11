'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orderoptions', [{
      name: 'Drankpakket',
      price: 2,
      description: '1 drankje',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Snackpakket',
      price: 5,
      description: '1 snack en 1 drankje',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Avondetenpakket',
      price: 10,
      description: '1 keer avondeten en 1 drankje',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('escaperooms', null, {});
  }
};
