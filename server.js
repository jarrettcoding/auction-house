const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

//need the routes file 

sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log (`App listening at http://localhost:${PORT} 🚀`));
});
