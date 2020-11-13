const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;;
const User = require("../models/User");
const config = require("../../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  const userId = payload.sub;
  User.findById(userId, (err, user) => {
    if (err) return done(err, false);
    if (user) return done(null, user);
    return done(null, false);
  })
});
const localOptions = { usernameField: "email" };
const localLoginStrategy = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if(err) return done(err);
    if(!user) return done(null, false);
    user.isPasswordEqualTo(password, (err, isMatch) => {
      if(err) return done(err);
      if(!isMatch) return done(null, false);
      return done(null, user);
    });
  })
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(jwtLogin);
passport.use(localLoginStrategy);
