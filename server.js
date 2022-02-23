const express = require("express");
const routes = require("./controllers");
const session = require("express-session");
const exphbs = require('express-handlebars');
const path = require('path');
const http = require('http'); 
const socketio = require('socket.io'); 
const formatMessage = require('./utils/messages'); 
const { userJoin, getCurrentUser } = require('./utils/chatUsers'); 

require('session'); 
require("dotenv").config();

const sequelize = require("./config/connection");
const { format } = require("path");
const { userJoin, getCurrentUser } = require("./utils/chatUsers");

const app = express();
const server = http.createServer(app); 
const io = socketio(server); 
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);


io.on('connection', socket => {  
  socket.on('joinRoom', ({ username, room }) => {
    const chatUserRoom = window.location.toString().split('/')[window.location.toString().split('/').length - 1]; 
    const chatUsername = session.username;
    const chatUserId = session.user_id;  
    const user = userJoin(chatUserId, chatUsername, chatUserRoom); 

    socket.join(user.room); 
 
    // welcome message in chat
    socket.emit('message', formatMessage('Admin', 'Welcome to the Auction!')); 

    // broadcast when a user connects to chat
    socket.broadcast
    .to(user.room)
    .emit('message', formatMessage('Admin', `${user.username} has joined the bidding!`)); 
  }); 

  // listen for chat message
  socket.on('chatMessage', (msg) => {
    const chatUserId = req.session.get('session_key'); 
    const user = getCurrentUser(chatUserId); 

    io.to(user.room).emit('message', formatMessage(user.username, msg)); 
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
