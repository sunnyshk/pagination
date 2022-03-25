const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "f9497672d5aa5a", // generated ethereal user
      pass: "16a0e04dc8cc72", // generated ethereal password
    },
  });