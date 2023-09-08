const sequelize = require('../config/connection');
const seedUser = require('../seeds/userSeeds');

const seddAll = async () => {
  await sequelize.sync({ force: true});

  await seedUser();


  process.exit(0);

};

seddAll();



