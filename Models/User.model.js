const { Schema, model} = require("mongoose");

const userSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  permissions: {
    type: String,
    default: "Customer"
  },
  favorites: Array
}, {
  collection: "Users"
});

module.exports = model("User", userSchema);