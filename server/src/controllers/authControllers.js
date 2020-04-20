const passport = require('koa-passport');

module.exports = {
  async auth(ctx) {
    try {
      passport.authenticate('google', { scope: ['email', 'profile'] }, (req, res) => {
        console.log(req);
      });
      ctx.response.status = 200;
      ctx.response.message = "Auth";
    } catch(e) {
      console.error("create note error: ", e);
    }
  },
  async authCallback(ctx) {
    try {
      passport.authenticate('google', { scope: ['email', 'profile'] });
      ctx.response.status = 200;
      ctx.response.message = "Authenticated";
    } catch(e) {
      console.error("create note error: ", e);
    }
  }
}