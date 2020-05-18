'use strict';
module.exports = (sequelize, DataTypes) => {
  const EscapeRoomOrder = sequelize.define('EscapeRoomOrder', {
    reservationDate: DataTypes.DATE,
    playerCount: DataTypes.INTEGER,
    bookerName: DataTypes.STRING,
    bookerEmail: DataTypes.STRING,
    bookerPhoneNumber: DataTypes.STRING,
    remark: DataTypes.TEXT
  }, {
    tableName: 'escaperoomorders'
  });

  EscapeRoomOrder.associate = (models) => {
    EscapeRoomOrder.belongsTo(models.EscapeRoom, {
      foreignKey: 'escapeRoomId',
      as: 'escapeRoom'
  });
    EscapeRoomOrder.belongsTo(models.OrderOption, {
      foreignKey: 'orderOptionId',
      as: 'orderOption'
  });
  };

  return EscapeRoomOrder;
};
