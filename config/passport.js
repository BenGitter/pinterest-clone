// Dependencies
const passport = require("passport");
const config = require("./config")[process.env.NODE_ENV || "production"];
const TwitterStrategy = require("passport-twitter").Strategy;

// (de)erializeUser
passport.serializeUser((user, callback) => {
  const _user = {
    name: user.username,
    id: user.id
  }
  callback(null, _user);
});

passport.deserializeUser((obj, callback) => {
  callback(null, obj);
});

// Strategy
passport.use(new TwitterStrategy({
  consumerKey: config.CONSUMER_KEY,
  consumerSecret: config.CONSUMER_SECRET,
  callbackURL: "http://localhost:3000/auth/twitter/callback"
}, (token, tokenSecret, profile, callback) => {
  return callback(null, profile);
}));

module.exports = passport;