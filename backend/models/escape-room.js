'use strict';
module.exports = (sequelize, DataTypes) => {
  const EscapeRoom = sequelize.define('EscapeRoom', {
    name: DataTypes.STRING,
    maxPlayerCount: DataTypes.INTEGER,
    playTime: DataTypes.INTEGER,
    setupTime: INTEGER,
    minimumPlayerAge: DataTypes.INTEGER
  });

  EscapeRoom.associate = (models) => {
    EscapeRoom.hasMany(models.EscapeRoomOrder)
  };

  return EscapeRoom;
};