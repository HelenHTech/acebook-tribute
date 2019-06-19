const mongoose = require('mongoose');

const Users = require('./server/models/users');
const Posts = require('./server/models/posts');

const connectDB = () => {
  return mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/acebook', {useNewUrlParser: true})
}

const models = { Users, Posts };

module.exports = { connectDB };
module.exports = models;