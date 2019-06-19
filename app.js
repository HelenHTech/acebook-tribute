const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/acebook', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
app.listen(port,function() {
  console.log("app running on port 8080"); })
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

const collection = db.collection('users')

app.get('/', async function (req, res) {
  const documents = await collection.find().toArray()
  console.log(documents);
  res.send(documents);
})
