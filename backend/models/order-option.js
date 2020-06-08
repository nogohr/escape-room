'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderOption = sequelize.define('OrderOption', {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.TEXT
    },
    {
      tableName: 'orderoptions'
    }
  );

  return OrderOption;
};