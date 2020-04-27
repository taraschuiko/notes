const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

const { CLIENT_ID, CLIENT_SECRET, CALLBACK } = process.env;

function extractProfile(profile) {
  let imageUrl = "";
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
  };
  const profileData = {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl,
  };
  console.log(profileData);
  return profileData;
};

passport.use(new GoogleStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: CALLBACK,
  accessType: 'offline',
  userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
},
(accessToken, refreshToken, profile, cb) => {
  cb(null, extractProfile(profile));
}));

module.exports = {
  extractProfile
};

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});
