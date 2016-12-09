const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// TODO: Write your PostModel schema here
// Hint: Don't for get to export it!

const postSchema = new Schema({
      'date' : String,
      'postTitle' : String,
      'author' : String,
      'content' : String
});

//export model to require in other parts of app
module.exports = mongoose.model('PostModel', postSchema);
