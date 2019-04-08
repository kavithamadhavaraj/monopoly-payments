var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  userID: String,
  name: String,
  email: String,
  provider: String,
  image: String
});

module.exports = mongoose.model('Profile', ProfileSchema);