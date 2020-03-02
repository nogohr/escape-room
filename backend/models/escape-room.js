'use strict';
module.exports = (sequelize, DataTypes) => {
  var EscapeRoom = sequelize.define('EscapeRoom', {
    name: DataTypes.STRING,
    maxPlayerCount: DataTypes.INTEGER
  });

  return EscapeRoom;
};