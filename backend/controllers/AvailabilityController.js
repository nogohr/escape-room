const models = require('../models');
const EscapeRoomOrder = models.EscapeRoomOrder;

exports.getAvailability = async function (req, res) {
  const orders = await EscapeRoomOrder.findAll();

  const result = {
    'data': {},
    'statusCode': 200
  };

  res.status(200).json(result);
};
