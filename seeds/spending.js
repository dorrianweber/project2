const { Spending } = require("../models");

const spendingData = [
  {
    restaurantSpent: "17.39",
    coffeeSpent: "4.87",
    barSpent: "14.98",
    date_id: "3/27/21",
    user_id: "1",
  },
  {
    restaurantSpent: "12.69",
    coffeeSpent: "4.87",
    barSpent: "00.00",
    date_id: "3/28/21",
    user_id: "1",
  },
  {
    restaurantSpent: "16.21",
    coffeeSpent: "4.87",
    barSpent: "00.00",
    date_id: "3/29/21",
    user_id: "1",
  },
];

const seedSpending = () => Spending.bulkCreate(spendingData);

module.exports = seedSpending;
