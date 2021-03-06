const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  title: { type: String, max: 100 },
  message: { type: String, required: true, multiLine: true },
  time_posted: { type: Date, default:Date.now },
  likes: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
})

// Export the model for use in the app
module.exports = mongoose.model('Posts', PostsSchema);
