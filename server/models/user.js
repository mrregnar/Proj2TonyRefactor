require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: String,
    // required: true,
  },
  communityName: {
    type: String,
    // required: true,
  },
  contactMethod: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
