const route = require('koa-route');

const rootRoutes = [
  route.get('/', async (ctx) => {
    ctx.body = '<h2>Working..</h2>';
  })
];

module.exports = rootRoutes;
