const router = require("express").Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "healthyhabitsapp123@gmail.com",
    pass: "keepithealthy321",
  },
});

const mailOptions = {
  from: "healthyhabitsapp123@gmail.com",
  to: "christmanholmes21@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
module.exports = router;
