const mongoose = require("mongoose");

/**
 * Schema is a Identity for a collection documents (blueprint),
 * Like a User class, which will be used to create multiple user instances, that is why new keyword used
 */
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});

//const User = mongoose.model("User", userSchema); //mogoose.model("Name of the model", schema)
//module.exports = User;

module.exports = mongoose.model("User", userSchema);
