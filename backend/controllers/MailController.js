const sgMail = require('@sendgrid/mail');

exports.sendMail = async function (req, res) {
    sgMail.setApiKey("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");

    const msg = {
        to: '0983144@hr.nl',
        from: 'nogohr@protonmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    try {
        const res = await sgMail.send(msg);
        console.log('res', res);
        
    } catch (err) {
        console.log('err', err.response.body);
        
    }

    res.status(200).json({});
}
