'use strict';
module.exports = (sequelize, DataTypes) => {
  const EscapeRoom = sequelize.define('EscapeRoom', {
    name: DataTypes.STRING,
    maxPlayerCount: DataTypes.INTEGER,
    playTime: DataTypes.INTEGER,
    setupTime: DataTypes.INTEGER,
    minimumPlayerAge: DataTypes.INTEGER
  }, {
    tableName: 'escaperooms'
  });

  EscapeRoom.associate = (models) => {
    EscapeRoom.belongsTo(models.EscapeRoomOrder, { foreignKey: 'escapeRoomId' })
  };

  return EscapeRoom;
};