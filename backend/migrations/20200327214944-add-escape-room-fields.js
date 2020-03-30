'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('escaperooms', 'playTime', { type: Sequelize.DataTypes.INTEGER }, { transaction: t }),
        queryInterface.addColumn('escaperooms', 'setupTime', { type: Sequelize.DataTypes.INTEGER }, { transaction: t }),
        queryInterface.addColumn('escaperooms', 'minimumPlayerAge', { type: Sequelize.DataTypes.INTEGER }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('escaperooms', 'playTime', { transaction: t }),
        queryInterface.removeColumn('escaperooms', 'setupTime', { transaction: t }),
        queryInterface.removeColumn('escaperooms', 'minimumPlayerAge', { transaction: t })
      ]);
    });
  }
};
