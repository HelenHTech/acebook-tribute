const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const flash = require('flash-express');
const signUp = require('./server/controllers/usersController');
const submitPost = require('./server/controllers/postsController');
const getPost = require('./server/controllers/getPostsController');
const editPost = require('./server/controllers/getPostsController');
const usersDB = require('./server/models/users');
const bcrypt = require('bcrypt');
const postsDB = require('./server/models/posts');

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

const server = app.listen(port,function() {
  console.log("app running on port 8080"); })


app.get('/', async (req, res) => {
  res.render('login');
});

app.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

app.post('/sign-up', signUp);

app.post('/posts', submitPost );

// seperating this code, the below is retrieving data from database

app.get('/posts', getPost, (req, res) => {
  const { name, title, message, id } = req.body;
  res.render('posts',  { name, title, message, id});
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

app.post('/postman', function(req, res) {
  console.log("Yoooooo");
  console.log(req.headers);
  console.log(req.body, 'anybody out there?');
  res.status(200).send("yay");
});

app.get('/post-edit', editPost);

app.get('/:id/update', editPost, (req, res) => {
  const name = res.locals.postID;
  res.render('post-edit', { name });
});


app.get('/post/:title', async (req, res) => {
    const post = await postsDB.find({title: req.params.title})
    console.log(post, 'a post')
    res.render('post-id', {
        post
    })
});

app.get('/posty/:id', async (req, res) => {
  const post = await postsDB.findById(req.params.id)
  console.log(post, 'a post')
  res.render('post-edit', {
      post
  })
});

app.get('/post/edit/:id', async (req, res) => {
  const post = await postsDB.findById(req.params.id)
  console.log(post, 'a post')
  res.render('post-edit', {
      post
  })
});


app.get('/edit/:title', async (req, res) => {
  const post = await postsDB.updateOne({ title: req.params.title}, {$set: {message: req.body.message}})
  console.log(post, 'a post')
  res.render('posts', {
      post
  })
});

app.post('/edit/:title', async (req, res) => {
  const post = await postsDB.updateOne({ title: req.params.title}, {$set: {message: req.body.message}})
  console.log(post, 'a post')
  res.redirect('/posts')
});

module.exports = { app, server };
