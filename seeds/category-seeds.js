// require the Category modles file 
const {Category} = require("../models")

const catData = [
    {
        category_name: 'samurai weapons and armor',
    },
    {
        category_name: 'fine art',
    },
    {
        category_name: 'decorative art',
    },
    {
        category_name: 'instruments',
    },
];

const seedCat = () => Category.bulkCreate(catData);

module.exports = seedCat;
