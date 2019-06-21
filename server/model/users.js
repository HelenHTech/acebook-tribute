const mongoose = require('mongoose');

  const users = new mongoose.Schema({
    name: String,
    email: String,
    password: String
  })
  const User = mongoose.model('User', users);
  const user1 = new User({ name: 'Helen', email: 'helen@gmail.com', password: '1234' })
  console.log(user1.name);
  user1.save(function (err, user1) {
    if (err) return console.error(err);
  });
