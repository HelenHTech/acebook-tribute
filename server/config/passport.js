const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport')
const usersDB = require('../models/users');

// expose this function to our app using module.exports
module.exports = passport.use(new LocalStrategy(
    function(email, password) {
      console.log('are you getting here?');
      usersDB.findOne({ username: email })
      .then(function(user) {
          return bcrypt.compare(password, user.password);
      })
      .then(function(samePassword) {
          if(!samePassword) {
              res.status(403).send();
          }
          res.send('buuuum done');
      })
      .catch(function(error){
          console.log("Error authenticating user: ");
          console.log(error);
      });
      next();
    }
  ));

  module.exports = passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  module.exports = passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });
