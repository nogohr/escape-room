const express = require('express');

const router = express.Router();
const controllers = require('../controllers');
const EscapeRoomController = controllers.EscapeRoomController;
const AvailabilityController = controllers.AvailabilityController;

router.get('/', (req, res, next) => {
    const result = {
        'data': 'The server is running',
        'statusCode': 200
    };

    res.status(200).json(result);
});

/** Escape Room Routes */
router.get('/escape-rooms', EscapeRoomController.getEscapeRooms);
router.post('/escape-rooms', EscapeRoomController.storeEscapeRoom);
router.put('/escape-rooms/:id', EscapeRoomController.updateEscapeRoom);
router.delete('/escape-rooms/:id', EscapeRoomController.deleteEscapeRoom);

router.get('/escape-room-availability/:escape-room-id', AvailabilityController.getAvailability);

exports.routeHandler = router;
