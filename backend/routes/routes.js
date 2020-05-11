const express = require('express');

const router = express.Router();
const models = require('../models');
const controllers = require('../controllers');
const EscapeRoom = models.EscapeRoom;
const OrderOption = models.OrderOption;
const OrderOptionController = controllers.OrderOptionController;
const EscapeRoomController = controllers.EscapeRoomController;
const AvailabilityController = controllers.AvailabilityController;

router.get('/', (req, res, next) => {
  const result = {
    data: 'The server is running',
    statusCode: 200,
  };

  res.status(200).json(result);
});

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

exports.routeHandler = router;
