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
    html: `<b>Hey there ${userData.name}! </b><br> Thank you very much for signing up with Healthy Habits! We're excited to begin this journey and <br> can't wait to see what the future has in store for you! This email address will be used to send you weekly reports <br> on the habits you are tracking and goals you would like to achieve. If you have any questions or concers <br> don't be afraid to reach out to us at this email address!`,
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
