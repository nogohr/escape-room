const models = require('../models');
const Order = models.EscapeRoomOrder;
const MailController = require('./MailController');

const moment = require('moment');

exports.getOrders = async function (req, res) {
  const order = await Order.findAll();

  const result = {
    'data': order,
    'statusCode': 200
  };

  res.status(200).json(result);
}

exports.storeOrder = async function (req, res) {
  const order = await Order.create({
    escapeRoomId: req.body.escapeRoomId,
    orderOptionId: req.body.orderOptionId,
    reservationDate: moment(req.body.reservationDate).toDate(),
    playerCount: req.body.playerCount,
    bookerName: req.body.bookerName,
    bookerEmail: req.body.bookerEmail,
    bookerPhoneNumber: req.body.bookerPhoneNumber,
    remark: req.body.remark
  });

  await MailController.sendMail(order.id, res);

  const result = {
    'data': order,
    'statusCode': 200,
    'orderMailUrl': `${req.headers.host}/order-mail/${order.id}`
  };

  res.status(200).json(result);
}

exports.getOrderById = async function (req, res) {
  await Order.findByPk(req.params.id, {include: ['EscapeRoom', 'OrderOption']}).then((order) => {
    res.status(200).json({
      'data': order,
      'statusCode': 200
    });
  });
};

exports.updateOrder = async function (req, res) {
  await Order.findByPk(req.params.id).then(function (option) {
    option.update({
      escapeRoomId: req.body.escapeRoomId,
      orderOptionId: req.body.orderOptionId,
      reservationDate: req.body.reservationDate,
      playerCount: req.body.playerCount,
      bookerName: req.body.bookerName,
      bookerEmail: req.body.bookerEmail,
      bookerPhoneNumber: req.body.bookerPhoneNumber,
      remark: req.body.remark
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