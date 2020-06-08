const express = require('express');
const cors = require('cors');
const router = express.Router();
const controllers = require('../controllers');
const OrderOptionController = controllers.OrderOptionController;
const EscapeRoomController = controllers.EscapeRoomController;
const MailController = controllers.MailController;
const OrderController = controllers.OrderController;
const AvailabilityController = controllers.AvailabilityController;

router.get('/', (req, res, next) => {
  const result = {
    data: 'The server is running',
    statusCode: 200,
  };

  res.status(200).json(result);
});

/** Allow CORS on all routes */
router.all('*', cors());

/** Escape Room Routes */
router.get('/escape-rooms', EscapeRoomController.getEscapeRooms);
router.post('/escape-rooms', EscapeRoomController.storeEscapeRoom);
router.put('/escape-rooms/:id', EscapeRoomController.updateEscapeRoom);
router.delete('/escape-rooms/:id', EscapeRoomController.deleteEscapeRoom);
router.get('/escape-room-availability/:id', AvailabilityController.getAvailability);

router.get('/escape-room-options', OrderOptionController.getOrderOptions);
router.post('/escape-room-options', OrderOptionController.storeOrderOption);
router.put('/escape-room-options/:id', OrderOptionController.updateOrderOption);
router.delete('/escape-room-options/:id', OrderOptionController.deleteOrderOption);

router.get('/escape-room-order', OrderController.getOrder);
router.post('/escape-room-order', OrderController.storeOrder);
router.put('/escape-room-order/:id', OrderController.updateOrder);
router.delete('/escape-room-order/:id', OrderController.deleteOrder);

router.get('/order-mail/:orderId', MailController.sendMail);

exports.routeHandler = router;
