const sgMail = require('@sendgrid/mail');
const path = require('path');
const ejs = require('ejs');

const config = require('../config/config.json');
const SEND_GRID_API_KEY = config.sendGridApiKey;

exports.sendMail = async function (req, res) {

    return res.render('mail.ejs', {
        customer_name: 'Henk de Tester',
        escape_room_name: 'Escape room 1',
        reservation_date: '12-05-2020 14:30',
        player_count: 6,
        order_option_name: 'Lunch pakket'
        // order_option_name: null
    });


    const html = await ejs
    .renderFile(path.join(__dirname, '../views/mail.ejs'),
    {
        customer_name: 'capitalizedFirstName'
    });

    res.render(html);


    console.log(1234, html)
    return;
    
    sgMail.setApiKey(SEND_GRID_API_KEY);

    const msg = {
        to: 'nogohr@protonmail.com',
        from: 'nogohr@protonmail.com',
        subject: 'Bestiging van reservering voor escape room ESCAPE_ROOM_NAAM',
        text: 'Bestiging van reservering voor escape room',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    try {
        const res = await sgMail.send(msg);
        console.log('res', res);
        console.log('Mail has been successfully send');
        
    } catch (error) {
        res.status(500).json({
            error
        });
    }

    res.status(200).json({});
}
