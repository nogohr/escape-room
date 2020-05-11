'use strict';

const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const escapeRoomId = await queryInterface.rawSelect('escaperooms', {}, ['id']); 
    const orderOptionsId = await queryInterface.rawSelect('orderoptions', {}, ['id']);
    const setupTime = await queryInterface.rawSelect('escaperooms', {}, ['setupTime']);
    const playTime = await queryInterface.rawSelect('escaperooms', {}, ['playTime']);
    const totalEscapeRoomTime = setupTime + playTime;
    const reservationDate = moment().set("hour", 13).set("minute", 0).set("second", 0);
    let reservationTimes = [reservationDate.toDate()];

    for (let index = 1; index <= 3; index++) {
      reservationTimes = [
        ...reservationTimes,
        reservationDate.add(totalEscapeRoomTime, 'minutes').toDate()
      ]
    }

    return queryInterface.bulkInsert('escaperoomorders', [{
      escapeRoomId: escapeRoomId,
      orderOptionId: orderOptionsId,
      reservationDate: reservationTimes[0],
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
      reservationDate: reservationTimes[1],
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
      reservationDate: reservationTimes[2],
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
      reservationDate: reservationTimes[3],
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
