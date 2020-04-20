const models = require('../models');
const OrderOption = models.OrderOption;

exports.getOrderOptions = async function (req, res) {
  const orderOption = await OrderOption.findAll();

  const result = {
    'data': orderOption,
    'statusCode': 200
  };

  res.status(200).json(result);
}

exports.storeOrderOption = async function (req, res) {
  const orderOption = OrderOption.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });

  const result = {
    'data': orderOption,
    'statusCode': 200
  };

  res.status(200).json(result);
}

exports.updateOrderOption = async function (req, res) {
  await OrderOption.findByPk(req.params.id).then(function (option) {
    option.update({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    }).then((note) => {
      res.status(200).json({
        'data': note,
        'statusCode': 200
      });
    });
  });
}

exports.deleteOrderOption = async function (req, res) {
  await OrderOption.findByPk(req.params.id).then(function (option) {
    option.destroy();

    res.status(200).json({
      'data': 'success',
      'statusCode': 200
    });
  });
}