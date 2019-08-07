const Koa = require('koa');
const app = new Koa();

const cors = require("@koa/cors")
const bodyParser = require("koa-bodyparser");

const passport = require("koa-passport");
const socketioJwt = require("socketio-jwt");
const socketIO = require("socket.io");

const routes = require('./routes');
const { setUpConnection, createNote, getNote } = require("./utils/dataBaseUtils");

if (process.env.NODE_ENV === 'development') require('dotenv').config();

const { PORT, HOST } = process.env;

app.use(cors());
setUpConnection();
app.use(bodyParser());
app.use(passport.initialize());
app.use(routes);
const server = app.listen(PORT, () => {
  console.log(`started in http://${HOST}:${PORT}`);
});

const jwtsecret = "secretkey";

let io = socketIO(server);
io.on('connection', socketioJwt.authorize({
  secret: jwtsecret,
  timeout: 15000
})).on('authenticated', function (socket) {
  console.log('Name from token: ' + socket.decoded_token.displayName);
  socket.on("clientEvent", (data) => {
    console.log(data);
  })
});