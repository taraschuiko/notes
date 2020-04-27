const Koa = require('koa');
const app = new Koa();

// cors
const cors = require('@koa/cors')
app.use(cors());

// db
const { setUpConnection } = require('./utils/dataBaseUtils');
setUpConnection();

// bodyparser
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// auth
const passport = require('koa-passport');
require('./utils/googleStrategy');
app.use(passport.initialize())
app.use(passport.session())

// routes
// const routes = require('./routes');
// app.use(routes);
const route = require('koa-route');
app.use(route.get('/auth',  passport.authenticate('google', { scope: ['email', 'profile'] })));

// start server
require('dotenv').config();
const { PORT, HOST } = process.env;
app.listen(PORT, () => {
  console.log(`started in http://${HOST}:${PORT}`);
});
