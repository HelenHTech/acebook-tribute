const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true, min: 6, max: 10 }
})

// Export the model for use in the app
module.exports = mongoose.model('Users', UsersSchema);
