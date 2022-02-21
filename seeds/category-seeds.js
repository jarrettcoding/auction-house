// require the Category modles file
const { Category } = require("../models");

const catData = [
  {
    category_name: "samurai weapons and armor",
    event_time :'2022-2-21'
  },
  {
    category_name: "fine art",
    event_time : '2022-2-22'
  },
  {
    category_name: "decorative art",
    event_time : '2022-2-23'
  },
  {
    category_name: "instruments",
    event_time : '2022-2-24'
  },
];

const seedCat = () => Category.bulkCreate(catData);

module.exports = seedCat;
