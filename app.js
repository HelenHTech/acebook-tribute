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
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const moflash = require('connect-flash')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html', exphbs());
app.set('views', path.join(__dirname, './views' ));
app.use(express.static('public'));
// app.engine('html', exphbs({defaultLayout: 'index', extname: '.html'}));
app.set('view engine', 'html');
app.use(require('express-session')({
  secret: 'youaremyfire',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 }
}));
app.use(moflash());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



require('./server/models/users');
require('./server/models/posts');

// passport config
passport.use(new LocalStrategy(usersDB.authenticate()));
passport.serializeUser(usersDB .serializeUser());
passport.deserializeUser(usersDB .deserializeUser());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/acebook', {useNewUrlParser: true});

const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
const server = app.listen(port,function() {
  console.log("app running on port 8080"); })

app.get('/', async (req, res) => {
  res.render('login');
});

app.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

app.post('/sign-up', signUp);

app.post('/posts', submitPost);

// seperating this code, the below is retrieving data from database

app.get('/posts', passport.authenticate('local', {
  failureRedirect: '/',
  // Set failureFlash to true
  failureFlash: true,
  failureFlash: 'You must log in'
}), getPost, (req, res) => {
  const { name, title, message } = req.body;
  res.render('posts',  { name, title, message
   });
});

app.get('/login', (req, res) => { res.render('login', { email : req.body.email })})

app.post('/login', function (req, res, next) { 
  const option = { position:"tl", duration:"5000" }
  const email = req.body.email;
  const password = req.body.password;
  passport.authenticate('local')
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

app.get('/logout', function(req, res) {
  req.logOut();
  req.session = null;
  res.redirect('/');
});


module.exports = { app, server };
