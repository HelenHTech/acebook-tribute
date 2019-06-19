const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
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
});


const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port,function() {
console.log("app running on port 8080"); })
