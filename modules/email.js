// if app is in production, it won't load .env file
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// function for sending mail
function sendMail(email, eSubject, message){
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tadas.baltaduonis98@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    }
    });

    var mailOptions = {
    from: 'tadas.baltaduonis98@gmail.com',
    to: 'tadasbaltaslt@gmail.com',
    subject: eSubject,
    text: email + '\n' + message
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}

module.exports = {sendMail}