const Koa = require('koa');
const app = new Koa();

// .env
require('dotenv').config();
const { PORT, HOST, CALLBACK } = process.env;

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
const route = require('koa-route');
const routes = require('./routes');
routes.map(route => app.use(route));

// auth routes
app.use(route.get('/auth', passport.authenticate('google', { scope: ['email', 'profile'] })));
app.use(route.get(CALLBACK, passport.authenticate('google', {
  scope: ['email', 'profile'],
  successRedirect: '/',
  failureRedirect: '/auth'
})));

// start server
app.listen(PORT, () => {
  console.log(`started in http://${HOST}:${PORT}`);
});
