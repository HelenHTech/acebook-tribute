const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
require('./server/models/users')
require('./server/models/posts')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/acebook', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
app.listen(port,function() {
  console.log("app running on port 8080"); })
db.once('open', function() {

  const Users = mongoose.model('Users');
  // const user1 = new User({ name: 'Helen', email: 'helen@gmail.com', password: '1234' })
  const user2 = new Users({ name: 'Sam', email: 'sam@gmail.com', password: '1234Agh' })
  console.log(user2.name);
  user2.save(function (err, user2) {
    if (err) return console.error(err);
  });

  const Posts = mongoose.model('Posts');
  // const user1 = new User({ name: 'Helen', email: 'helen@gmail.com', password: '1234' })
  const post1 = new Posts({ title: 'Hi everyone', message: 'we love the backstreet boys!' })
  console.log(post1.name);
  post1.save(function (err, post1) {
    if (err) return console.error(err);
  });

});

const collection = db.collection('users')
const collection2 = db.collection('posts')

app.get('/', async function (req, res) {
  const documents = await collection.find().toArray()
  console.log(documents);
  const documents2 = await collection2.find().toArray()
  console.log(documents2);
  res.send(documents2);
})
