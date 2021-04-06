const router = require("express").Router();
const nodemailer = require("nodemailer");
const mail_pass = process.env.mail_pass;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "healthyhabitsapp123@gmail.com",
    pass: mail_pass,
  },
});

var mailDetails = {
  from: "healthyhabitsapp123@gmail.com",
  to: "christmanholmes21@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer",
};

transporter.sendMail(mailDetails, function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: ");
  }
});
module.exports = router;
