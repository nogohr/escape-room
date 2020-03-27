'use strict';
module.exports = (sequelize, DataTypes) => {
  const EscapeRoomOrder = sequelize.define('EscapeRoomOrder', {
    reservationDate: DataTypes.DATE,
    playerCount: DataTypes.INTEGER,
    bookerName: DataTypes.STRING,
    bookerEmail: DataTypes.STRING,
    bookerPhoneNumber: STRING,
    remark: DataTypes.TEXT
  });

  EscapeRoomOrder.associate = (models) => {
    EscapeRoomOrder.belongsTo(models.EscapeRoom);
    EscapeRoomOrder.belongsTo(models.OrderOption);
  };

  return EscapeRoomOrder;
};