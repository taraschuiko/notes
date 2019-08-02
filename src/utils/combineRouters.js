const compose = require('koa-compose');

module.exports = function combine(routers) {
  if (!Array.isArray(routers)) throw Error('Argument of combine() must be array of Routers');
  let middleware = [];
  routers.forEach((router) => {
    middleware = [...middleware, router.routes(), router.allowedMethods()];
  });
  return compose(middleware);
};
