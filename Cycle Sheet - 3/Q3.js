//19BDS0042 SAMARTH GUPTA

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
            user: 'samarthgupta42@gmail.com',
            pass: 'samarth#03'
      }
    });
    var mailOptions = {
          from: 'samarthgupta42@gmail.com',
          to: 'samarth.gupta2019@vitstudent.ac.in, alaexjohn1900@gmail.com',
          subject: 'E-mail From 19BDS0042',
          text: 'Hello , This E-mail Was Sent Using Node-js By Samarth Gupta 19BDS0042!'
    };
    transporter.sendMail(mailOptions, function(error, info){
          if (error) {
                console.log(error);
          } else {
                console.log('Email sent: ' + info.response);
          }
    });
