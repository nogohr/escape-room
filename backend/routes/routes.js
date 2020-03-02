const express = require('express');

const router = express.Router();
const models = require('../models');

router.get('/', (req, res, next) => {
    const result = {
        'data': 'The server is running',
        'statusCode': 200
    };

    res.status(200).json(result);
});

exports.routeHandler = router;