const express = require('express');
const routes = require('./controllers');
const session = require('express-session');
require('dotenv').config();

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = { 
    secret: process.env.secret,
    cookie: {},
    resave: false,
    saveUnitialize: true,
    store: new SequelizeStore({
        db: sequelize
    })
}
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session(sess))

app.use(routes);

app.use(require('./controllers'));

sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log (`App listening at http://localhost:${PORT} 🚀`));
});
