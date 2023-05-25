const express = require('express');
const app = express();
const scheduler = require('node-cron');
const {transporter, options} = require('./services/email');

const PORT = 1338;
scheduler.schedule("* * * * *", () => { // Refer to https://crontab.guru/ to understand the schedule
    console.log("Sending email");

    transporter.sendMail(options, (err, info) => {
        if(err){
            console.error(err);
        }
        console.log('Email send with info =', info)
    })
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})