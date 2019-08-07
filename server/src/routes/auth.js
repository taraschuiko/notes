const Router = require('koa-router');
const controllers = require("../controllers/authControllers");

const auth = new Router();

auth.post('/user', controllers.createUser)
  .post('/login', controllers.login)
  .get('/check', controllers.check);

module.exports = auth;