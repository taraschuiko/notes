const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

const { CLIENT_ID, SECRET, CALLBACK } = process.env;

function extractProfile(profile) {
  let imageUrl = "";
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
  }
  return {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl,
  };
}

passport.use(new GoogleStrategy({
  clientID: CLIENT_ID,
  clientSecret: SECRET,
  callbackURL: CALLBACK,
  accessType: 'offline',
  userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
},
(accessToken, refreshToken, profile, cb) => {
  cb(null, extractProfile(profile));
}));
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
})

// module.exports = {
//   usePassport() {
//     passport.use(new GoogleStrategy({
//       clientID: CLIENT_ID,
//       clientSecret: SECRET,
//       callbackURL: CALLBACK,
//       accessType: 'offline',
//       userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       cb(null, extractProfile(profile));
//     }));
//     passport.serializeUser((user, cb) => {
//       cb(null, user);
//     });
//     passport.deserializeUser((obj, cb) => {
//       cb(null, obj);
//     })
//   }
// }
