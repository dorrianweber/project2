const sequelize = require('../config/connection');
const seedGallery = require('./sleeping');
const seedPaintings = require('./eating');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEating();

  await seedSleeping();

  process.exit(0);
};

seedAll();