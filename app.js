const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const flash = require('flash-express');
const signUp = require('./server/controllers/usersController');
const submitPost = require('./server/controllers/postsController');
const getPost = require('./server/controllers/getPostsController');
const usersDB = require('./server/models/users');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html', exphbs());
app.set('views', path.join(__dirname, './views' ));
app.use(express.static('public'));
app.use(flash());
// app.engine('html', exphbs({defaultLayout: 'index', extname: '.html'}));
app.set('view engine', 'html');

const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

require('./server/models/users');
require('./server/models/posts');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/acebook', {useNewUrlParser: true});

const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
const server = app.listen(port,function() {
  console.log("app running on port 8080"); })
// db.once('open', function() {

//   const Users = mongoose.model('Users');
//   // const user1 = new User({ name: 'Helen', email: 'helen@gmail.com', password: '1234' })
//   const user2 = new Users({ name: 'Sam', email: 'sam@gmail.com', password: '1234Agh' })
//   console.log(user2.name);
//   user2.save(function (err, user2) {
//     if (err) return console.error(err);
//   });

//   const Posts = mongoose.model('Posts');
//   // const user1 = new User({ name: 'Helen', email: 'helen@gmail.com', password: '1234' })
//   const post1 = new Posts({ title: 'Hi everyone', message: 'we love the backstreet boys!' })
//   console.log(post1.name);
//   post1.save(function (err, post1) {
//     if (err) return console.error(err);
//   });

// });

// const collection = db.collection('users');
// const collection2 = db.collection('posts'); 

// app.get('/test', async function (req, res) {
//   const documents = await collection.find().toArray()
//   console.log(documents);
//   const documents2 = await collection2.find().toArray()
//   console.log(documents2);
//   res.send(documents2);
// });

app.get('/', async (req, res) => {
  res.render('login');
});

app.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

app.post('/sign-up', signUp);

app.post('/posts', submitPost);

// seperating this code, the below is retrieving data from database

app.get('/posts', getPost, (req, res) => {
  const { name, title, message } = req.body;
  res.render('posts',  { name, title, message
   });
});

app.get('/login', (req, res) => { res.render('login')})

app.post('/login', function (req, res, next) { 
  const option = { position:"tl", duration:"5000" }
  const email = req.body.email;
  const password = req.body.password;

  usersDB.findOne({ email })
    .then(function(user) {
        return bcrypt.compare(password, user.password);
    })
    .then(function(samePassword) {
        if(!samePassword) {
            res.status(403).send();
        }
        res.flash('You are now successfully logged in!', 'info', option);
        res.render('posts');
    })
    .catch(function(error){
        console.log("Error authenticating user: ");
        console.log(error);
    });
});

module.exports = { app, server };
