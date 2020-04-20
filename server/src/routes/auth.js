const Router = require('koa-router');
const controllers = require("../controllers/authControllers");

const auth = new Router();

auth.get('/auth', controllers.auth)
  .get('/callback', controllers.authCallback);

module.exports = auth;
