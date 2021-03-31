const sequelize = require('../config/connection');
const seedUser = require('./user');
const seedSleeping = require('./sleeping');
const seedEating = require('./eating');
const seedSpending = require('./spending');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedEating();

  await seedSleeping();

  await seedSpending();

  process.exit(0);
};

seedAll();