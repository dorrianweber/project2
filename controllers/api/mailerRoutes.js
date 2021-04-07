const router = require("express").Router();
const nodemailer = require("nodemailer");
const mail_pass = process.env.mail_pass;

const mailer = (userData) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "healthyhabitsapp123@gmail.com",
      pass: mail_pass,
    },
  });

  var mailDetails = {
    from: "healthyhabitsapp123@gmail.com",
    to: userData.email,
    subject: "Welcome to Healthy Habits!",
    text: "That was easy!",
    html: `<b>Hey there! ${userData.name} </b><br> Thanks for signing up for Healthy Habits tracker. We will be using this email address to send you reports on your habits that you are tracking!`,
  };

  transporter.sendMail(mailDetails, function (error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: ");
    }
  });
};
module.exports = mailer;
