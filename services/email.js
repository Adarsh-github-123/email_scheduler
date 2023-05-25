const nodemailer = require('nodemailer');
const {USER_EMAIL, USER_PASSWORD} = require('../config/credentials');

const SMTP_PORT = 587;
const SMTP_Server = "smtp-relay.sendinblue.com";

const SENDER_EMAIL = USER_EMAIL;
const RECEIVER_EMAIL = "";//Enter the receiver email

const CC = [];
const BCC = [];
const EMAIL_SUBJECT = "Happy Holiday"; //Anything
const EMAIL_BODY_HTML = "<h1>Happy Holiday</h1>"; //Any html code inside a string

const options = {
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    cc: CC,
    bcc: BCC,
    subject: EMAIL_SUBJECT,
    html: EMAIL_BODY_HTML
};

const transporter = nodemailer.createTransport({
    host: SMTP_Server,
    port: SMTP_PORT,
    secure: false, 
    auth: {
        user: USER_EMAIL,
        pass: USER_PASSWORD
    }
});


module.exports = {transporter, options };