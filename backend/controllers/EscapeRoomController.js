const models = require('../models');
const EscapeRoom = models.EscapeRoom;

exports.getEscapeRooms = async function (req, res) {
    const escapeRooms = await EscapeRoom.findAll();

    const result = {
        'data': escapeRooms,
        'statusCode': 200
    };

    res.status(200).json(result);
}

exports.storeEscapeRoom = async function (req, res) {
  const escapeRoom = await EscapeRoom.create({
    name: req.body.name,
    price: req.body.price,
    maxPlayerCount: req.body.maxPlayerCount,
    playTime: req.body.playTime,
    setupTime: req.body.setupTime,
    minimumPlayerAge: req.body.minimumPlayerAge
  });

  const result = {
    'data': escapeRoom,
    'statusCode': 200
  };

  res.status(200).json(result);
}

exports.updateEscapeRoom = async function (req, res) {
    const escapeRoom = await EscapeRoom.findByPk(req.params.id)

    if (!escapeRoom) {
        res.status(404).json({
            'data': 'failed',
            'statusCode': 404
        });
    }

    const note = await escapeRoom.update({
        name: req.body.name,
        price: req.body.price,
        maxPlayerCount: req.body.maxPlayerCount,
        playTime: req.body.playTime,
        setupTime: req.body.setupTime,
        minimumPlayerAge: req.body.minimumPlayerAge
    })

    res.status(200).json({
        'data': note,
        'statusCode': 200
    });
}

exports.deleteEscapeRoom = async function (req, res) {
    const escapeRoom = await EscapeRoom.findByPk(req.params.id)
    if (!escapeRoom) {
        res.status(404).json({
            'data': 'failed',
            'statusCode': 404
        });
    }

    await escapeRoom.destroy();

    res.status(200).json({
        'data': 'success',
        'statusCode': 200
    });
}