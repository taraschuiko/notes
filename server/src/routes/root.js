const route = require('koa-route');

const routes = [
  route.get('/', async (ctx) => {
    ctx.body = '<h2>Working..</h2>';
  })
];

module.exports = routes;
