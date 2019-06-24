const Users = require('./../models/users');
// const collection = db.collection('users');
const signUp = async(req, res) => {
  const { name, email, password } = req.body;
  const newSignUp = new Users({ name, email, password });

  try {
    await newSignUp.save();
  } catch (error) {
    console.log('Error with catch', error);
  } finally {
    console.log('It worked')
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
