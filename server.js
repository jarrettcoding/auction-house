const express = require("express");
const routes = require("./controllers");
const session = require("express-session");
const exphbs = require('express-handlebars');
const path = require('path');
const http = require('http'); 
const socketio = require('socket.io'); 

require("dotenv").config();

const sequelize = require("./config/connection");

const app = express();
const server = http.createServer(app); 
const io = socketio(server); 
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

io.on('connection', socket => {
  console.log('New WS connected');

  // welcome message in chat
  socket.emit('message', 'Welcome to Chat'); 

  // broadcast when a user connects to chat
  socket.broadcast.emit('message', 'Someone has joined the bidding!'); 

  // listen for chat message
  socket.on('chatMessage', (msg) => {
    io.emit('message', msg); 
  }); 
});

const sess = {
  secret: process.env.secret,
  cookie: {},
  resave: false,
  saveUnitialize: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(session(sess));
server.use(express.static(path.join(__dirname, "public")));

const hbs = exphbs.create({});

server.use(routes);

server.engine("handlebars", hbs.engine);
server.set("view engine", "handlebars");

server.use(require("./controllers"));

sequelize.sync({ force: false }).then(() => {

  server.listen(PORT, () => console.log (`App listening at http://localhost:${PORT} 🚀`));
  
});
