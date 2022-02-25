// require {User} from the model fi)le
const { User } = require("../models");
const userData = [
  {
    firstname: "Stev",
    lastname: "Mike",
    username: "Stevemike",
    email: "smike@gmail.com",
    password: 123456789,
    address: "2258 main street, Houston, Tx, 77095",
  },
  {
    firstname: "Emma",
    lastname: "Brown",
    username: "Emmabrown",
    email: "emma.brown@gmail.com",
    password: 987654321,
    address: "77098 w adams blvd, LA, CA, 90018",
  },
  {
    firstname: "Sophia",
    lastname: "Miller",
    username: "Sophiamiller.",
    email: "miller232@gmail.com",
    password: 1122334455,
    address: "5520 burnet rd, apt#201, austin, 78756",
  },
  {
    firstname: "George",
    lastname: "Smith",
    username: "georgesmith.",
    email: "geo_smith@gmail.com",
    password: 122333444455555,
    address: "891 Communipaw Ave, Jersey City, NJ 07304",
  },
  {
    firstname: "Anna",
    lastname: "Lopez",
    username: "Annalopez.",
    email: "lopez92@gmail.com",
    password: 789345126,
    address: "741 Orange Ave, Altamonte Springs, FL 32714",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
