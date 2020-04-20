const express = require('express');

const router = express.Router();
const models = require('../models');
const EscapeRoom = models.EscapeRoom;

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

exports.routeHandler = router;