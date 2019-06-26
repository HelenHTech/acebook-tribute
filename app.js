const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const signUp = require('./server/controllers/usersController');
const submitPost = require('./server/controllers/postsController');
const getPost = require('./server/controllers/getPostsController');
const usersDB = require('./server/models/users');
const bcrypt = require('bcrypt');
//mel adds
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const local = require('./server/config/passport')


//set up for express
app.use(cookieParser()); //mel adds to read cookies for auth
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html', exphbs());
app.set('views', path.join(__dirname, './views' ));
app.use(express.static('public'));
// app.engine('html', exphbs({defaultLayout: 'index', extname: '.html'}));
app.set('view engine', 'html');



//tidying 
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

require('./server/models/users');
require('./server/models/posts');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/acebook', {useNewUrlParser: true});
const db = mongoose.connection;
//mel adds for passport

// app.use(session({ secret: 'singbumbumbum'})); //session secret
app.set('trust proxy', 1)
const sess = {
  secret: 'singbumbumbum',
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy, 1')//trust first proxy
  sess.cookie.secure = true
}
// app.use(session(sess))
app.use(passport.initialize());
app.use(passport.session(sess));
app.use(flash(sess)); //use connect-flash for flash messages stored in the session


app.get('/', async (req, res) => {
  res.render('login');
});

app.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

app.post('/sign-up', signUp);

app.post('/posts', isLoggedIn, submitPost);

// seperating this code, the below is retrieving data from database

app.get('/posts', getPost, (req, res) => {
  const { name, title, message } = req.body;
  res.render('posts',  { name, title, message
   });
});

app.get('/login', (req, res) => { res.render('login')})
// app.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     console.log('get user', req.email)
//     res.send(req.email);
//   }
// );
app.post('/login',
  passport.authenticate('local', { successRedirect: '/posts',
                                   failureRedirect: '/noaccess'})
);

// app.post('/login', function (req, res, next) { 
//   const email = req.body.email;
//   const password = req.body.password;

//   usersDB.findOne({ email })
//     .then(function(user) {
//         return bcrypt.compare(password, user.password);
//     })
//     .then(function(samePassword) {
//         if(!samePassword) {
//             res.status(403).send();
//         }
//         res.send('buuuum done');
//     })
//     .catch(function(error){
//         console.log("Error authenticating user: ");
//         console.log(error);
//     });

// });

// app.post('/login', function (req, res, next) { 
//   passport.use(new LocalStrategy(
//     function(email, password, done) {
//       usersDB.findOne({ email })
//       .then(function(user) {
//           return bcrypt.compare(password, user.password);
//       })
//       .then(function(samePassword) {
//           if(!samePassword) {
//               res.status(403).send();
//           }
//           res.send('buuuum done');
//       })
//       .catch(function(error){
//           console.log("Error authenticating user: ");
//           console.log(error);
//       });
//     }
//   ));
// });



// mel adds
app.get('/noaccess', function(req, res) { 
  res.render('noaccess') 
})
// a secure route
app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile.ejs', {
      user : req.user // get the user out of session and pass to template
  });
});
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
// check the users is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();

  // if they aren't redirect them to the home page
  res.redirect('/noaccess');
}

const server = app.listen(port,function() {
  console.log("app running on port 8080"); })

module.exports = { app, server };
