const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('express-validator/check');

const UsersSchema = new Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    lowercase: true, 
    unique: true },
    // validate: [ isEmail, 'Email should have a valid syntax e.g. example@example.com'] },
  password: { type: String, required: true, min: 6, max: 10 }
})

// Export the model for use in the app
module.exports = mongoose.model('Users', UsersSchema);