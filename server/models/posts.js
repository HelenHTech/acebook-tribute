const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { UsersSchema } = require('./users');
const bum =  mongoose.model('Users', UserSchema);
const PostsSchema = new Schema({
  title: { type: String, max: 100 },
  message: { type: String, required: true, multiLine: true },
  time_posted: { type: Date, default:Date.now },
  likes: { type: Number },
  name: [{ type: mongoose.Schema.Types.ObjectId, ref: bum }]
})

// Export the model for use in the app
module.exports = mongoose.model('Posts', PostsSchema);
