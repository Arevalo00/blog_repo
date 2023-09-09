const sequelize = require('../config/connection');
const seedUser = require('../seeds/userSeeds');
const seedComments = require('../seeds/commentSeeds');
const seedPost = require('../seeds/postSeeds');

const seddAll = async () => {
  await sequelize.sync({ force: true});

  await seedUser();

  await seedPost();

 await seedComments();



  process.exit(0);

};

seddAll();



