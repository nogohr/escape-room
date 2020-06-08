const moment = require('moment');
const nodemailer = require('nodemailer');
const models = require('../models');

const config = require('../config/config.json');
const Order = models.EscapeRoomOrder;

exports.sendMail = async function (req, res) {
    let env = process.env.NODE_ENV || 'development';
    let conf = config[env];

    const order = await Order.findByPk(
        req.params.orderId, 
        {
            include: ['EscapeRoom', 'OrderOption']
        }
    );

    let html = '';

    await res.render('mail.ejs', {
        customer_name: order.bookerName,
        escape_room_name: order.EscapeRoom.name,
        reservation_date: moment(order.reservationDate).format('DD-MM-YYYY HH:mm'),//'12-05-2020 14:30',
        player_count: order.playerCount,
        order_option_name: order.OrderOption.name || null
    }, function (err, out) {
        html = out;
    });

    const emailOptions = {
        to: 'nogohr@protonmail.com',
        from: 'nogohr@protonmail.com',
        subject: 'Bestiging van reservering voor escape room ESCAPE_ROOM_NAAM',
        text: 'Bestiging van reservering voor escape room',
        html
    };

    let transporter = nodemailer.createTransport({...conf.mail});

    let info = await transporter.sendMail(emailOptions);

    res.status(200).json(info);
}
