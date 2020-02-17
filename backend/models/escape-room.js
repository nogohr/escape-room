'use strict';
module.exports = (sequelize, DataTypes) => {
  var EscapeRoom = sequelize.define('EscapeRoom', {
    name: DataTypes.STRING,
    max_player_count: DataTypes.INTEGER
  });

  return EscapeRoom;
};