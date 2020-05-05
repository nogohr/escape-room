'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const escapeRoomId = await queryInterface.rawSelect('escaperooms', {}, ['id']); 
    const orderOptionsId = await queryInterface.rawSelect('orderoptions', {}, ['id']);

    return queryInterface.bulkInsert('escaperoomorders', [{
      escapeRoomId: escapeRoomId,
      orderOptionId: orderOptionsId,
      reservationDate: new Date(),
      playerCount: 6,
      bookerName: 'Jeroen',
      bookerEmail: 'jeroen@jeroen.nl',
      bookerPhoneNumber: '1234567890',
      remark: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      escapeRoomId: escapeRoomId,
      orderOptionId: orderOptionsId,
      reservationDate: new Date(),
      playerCount: 3,
      bookerName: 'Jory',
      bookerEmail: 'jory@jory.nl',
      bookerPhoneNumber: '1234567890',
      remark: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      escapeRoomId: escapeRoomId,
      orderOptionId: orderOptionsId,
      reservationDate: new Date(),
      playerCount: 4,
      bookerName: 'Wouter',
      bookerEmail: 'wouter@wouter.nl',
      bookerPhoneNumber: '1234567890',
      remark: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      escapeRoomId: escapeRoomId,
      orderOptionId: orderOptionsId,
      reservationDate: new Date(),
      playerCount: 6,
      bookerName: 'Lars',
      bookerEmail: 'lars@lars.nl',
      bookerPhoneNumber: '1234567890',
      remark: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('escaperooms', null, {});
  }
};
