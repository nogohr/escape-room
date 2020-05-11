const models = require('../models');
const Order = models.EscapeRoomOrder;

exports.getOrder = async function (req, res) {
  const order = await Order.findAll();

  const result = {
    'data': order,
    'statusCode': 200
  };

  res.status(200).json(result);
}

exports.storeOrder = async function (req, res) {
  const order = Order.create({
    EscapeRoomId: req.body.EscapeRoomId,
    OrderOptionId: req.body.OrderOptionId,
    ReservationDate: req.body.ReservationDate,
    PlayerCount: req.body.PlayerCount,
    BookerName: req.body.BookerName,
    BookerEmail: req.body.BookerEmail,
    BookerPhoneNumber: req.body.BookerPhoneNumber,
    Remark: req.body.Remark
  });

  const result = {
    'data': order,
    'statusCode': 200
  };

  res.status(200).json(result);
}

exports.updateOrder = async function (req, res) {
  await Order.findByPk(req.params.id).then(function (option) {
    option.update({
      EscapeRoomId: req.body.EscapeRoomId,
      OrderOptionId: req.body.OrderOptionId,
      ReservationDate: req.body.ReservationDate,
      PlayerCount: req.body.PlayerCount,
      BookerName: req.body.BookerName,
      BookerEmail: req.body.BookerEmail,
      BookerPhoneNumber: req.body.BookerPhoneNumber,
      Remark: req.body.Remark
    }).then((note) => {
      res.status(200).json({
        'data': note,
        'statusCode': 200
      });
    });
  });
}

exports.deleteOrder = async function (req, res) {
  await Order.findByPk(req.params.id).then(function (option) {
    option.destroy();

    res.status(200).json({
      'data': 'success',
      'statusCode': 200
    });
  });
}