const seedCat = require('./category-seeds');
const seedProduct = require('./product-seeds');
const seedUser = require ('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n----DATABASE SYNCED -----\n');
    await seedCat();
    console.log('\n----CATEGORIES INFO BEEN SEEDED -----\n');

    await seedProduct();
    console.log('\n----PRODUCTS INFO BEEN SEEDED -----\n');

    await seedUser();
    console.log('\n----USER INFO BEEN SEEDED -----\n');

    process.exit(0);

}
seedAll()