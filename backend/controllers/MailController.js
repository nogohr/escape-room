const moment = require('moment');

const models = require('../models');
const Order = models.EscapeRoomOrder;

exports.sendMail = async function (req, res) {
    
    

    const order = await Order.findByPk(
        req.params.orderId, 
        {
            include: ['EscapeRoom', 'OrderOption']
        }
    );

    return res.render('mail.ejs', {
        customer_name: order.bookerName,
        escape_room_name: order.EscapeRoom.name,
        reservation_date: moment(order.reservationDate).format('DD-MM-YYYY HH:mm'),//'12-05-2020 14:30',
        player_count: order.playerCount,
        order_option_name: order.OrderOption.name || null
    });

    // const html = '';

    // const emailOptions = {
    //     to: 'nogohr@protonmail.com',
    //     from: 'nogohr@protonmail.com',
    //     subject: 'Bestiging van reservering voor escape room ESCAPE_ROOM_NAAM',
    //     text: 'Bestiging van reservering voor escape room',
    //     html,
    // };
}
