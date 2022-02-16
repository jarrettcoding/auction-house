const { User } = require('../models'); 
const userData = [
    {
        username: 'Steve Mike',
        email:'smike@gmail.com',
        password:123456789,
        address: '2258 main street, Houston, Tx, 77095',
    },
    {
        username: 'Emma Brown',
        email:'emma.brown@gmail.com',
        password:987654321,
        address: '77098 w adams blvd, LA, CA, 90018',
    },
    {
        username: 'Sophia Miller.',
        email:'miller232@gmail.com',
        password: 1122334455,
        address: '5520 burnet rd, apt#201, austin, 78756',
    },
    {
        username: 'george Smith.',
        email:'geo_smith@gmail.com',
        password: 122333444455555,
        address: '891 Communipaw Ave, Jersey City, NJ 07304',
    },
    {
        username: 'Anna Lopez.',
        email:'lopez92@gmail.com',
        password: 789345126,
        address: '741 Orange Ave, Altamonte Springs, FL 32714',
    },
];

const seedUser = () => User.bulkCreate(userData);


module.exports= seedUser; 
