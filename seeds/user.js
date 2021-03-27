const { User } = require("../models");

const userData = [
  {
    user_id: "1",
    date_id: "3/27/21",
    email: "example@gmail.com",
    password: "example123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
