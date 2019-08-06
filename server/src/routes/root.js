const Router = require('koa-router');

const root = new Router();

root.get('/', async (ctx) => {
  ctx.body = '<h2>Working..</h2>';
});

module.exports = root;
