'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('escaperoomorders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      escapeRoomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EscapeRoom',
          key: 'id'
        }
      },
      orderOptionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'OrderOption',
          key: 'id'
        }
      },
      reservationDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      playerCount: {
        type: Sequelize.INTEGER
      },
      bookerName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bookerEmail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bookerPhoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      remark: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('escaperoom-order');
    
  }
};
