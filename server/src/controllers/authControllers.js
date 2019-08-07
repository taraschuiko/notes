const passport = require("koa-passport");
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtsecret = "secretkey";

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
},
  function (email, password, done) {
    User.findOne({ email }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user || !user.checkPassword(password)) {
        return done(null, false, { message: 'Нет такого пользователя или пароль неверен.' });
      }
      return done(null, user);
    });
  }
)
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtsecret
};

passport.use(new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.id, (err, user) => {
    if (err) {
      return done(err)
    }
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})
);

module.exports = {
  async createUser(ctx) {
    try {
      ctx.body = await db.createUser(ctx.request.body);
    }
    catch (err) {
      ctx.status = 400;
      ctx.body = err;
    }
  },
  async login(ctx) {
    await passport.authenticate('local', function (err, user) {
      if (user == false) {
        ctx.body = "Login failed";
      } else {
        const payload = {
          id: user.id,
          displayName: user.displayName,
          email: user.email
        };
        const token = jwt.sign(payload, jwtsecret); 
        
        ctx.body = {user: user.displayName, token: 'JWT ' + token};
      }
    })(ctx, next) 
  },
  async check(ctx, next) {
    await passport.authenticate('jwt', function (err, user) {
      if (user) {
        ctx.body = "hello " + user.displayName;
      } else {
        ctx.body = "No such user";
        console.log("err", err)
      }
    } )(ctx, next)  
  }
}
