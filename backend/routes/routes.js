const express = require('express');

const router = express.Router();
const models = require('../models');
const controllers = require('../controllers');
const EscapeRoom = models.EscapeRoom;
const OrderOption = models.OrderOption;
const OrderOptionController = controllers.OrderOptionController;

router.get('/', (req, res, next) => {
    const result = {
        'data': 'The server is running',
        'statusCode': 200
    };

    res.status(200).json(result);
});

router.get('/escape-rooms', async (req, res, next) => {
    const escapeRooms = await EscapeRoom.findAll();

    const result = {
        'data': escapeRooms,
        'statusCode': 200
    };

    res.status(200).json(result);
});

router.get('/order-options', OrderOptionController.getOrderOptions);
router.post('/order-options', OrderOptionController.storeOrderOption);
router.put('/order-options/:id', OrderOptionController.updateOrderOption);
router.delete('/order-options/:id', OrderOptionController.deleteOrderOption);

exports.routeHandler = router;