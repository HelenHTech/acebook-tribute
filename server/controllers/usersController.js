const Users = require('./../models/users');
const bcrypt = require('bcrypt');

const signUp = async (req, res, next) => {
  const { name, email, password} = req.body;
  const newSignUp = new Users({ name, email, password});
  const BCRYPT_SALT_ROUNDS = 12;
  const option = { position:"tl", duration:"5000"};

  try {

    bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function(err, hash) {
      newSignUp.save(hash)
    });
    // await newSignUp.save();
    res.flash('You are now successfully signed up to Acebook!', 'info', option);
    res.redirect('posts');
    next();
  } catch (error) {
    console.log('Error with catch', error);
  } finally {
    console.log('It worked', req.body)
  }
};

module.exports = signUp;
