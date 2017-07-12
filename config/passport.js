var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var path = require("path");

var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },

  function(email, password, done) {
    //Try and find user in database
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      //If no user is found with that emial
      if(!dbUser) {
        return done(null, false, {
          message: "No user with that e-mail found."
        });
      }
      //If there si a user but the password doesn't match
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      //If none return user
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
