const Users = require('./../models/users');

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const newSignUp = new Users({ name, email, password });

  try {
    await newSignUp.save();
    res.redirect('posts');
    next();
  } catch (error) {
    console.log('Error with catch', error);
  } finally {
    console.log('It worked', req.body)
  }
};

module.exports = signUp;

// app.get('/', async (req, res) => {
//   db(function(db) {
//     delete req.body._id;
//     collection.insertOne(req.body);
//   })
//   res.render('index');
//   console.log('This should have data:', req.body);
// });
