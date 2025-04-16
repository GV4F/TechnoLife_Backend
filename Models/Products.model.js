const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true
  },
  category: String,
  img: {
    type: String,
    required: true
  },
  keywords: {
    type: Array
  },
  offer: {
    type: Boolean,
    default: false
  },
  inventory: {
    type: Number,
    default: 1
  }
}, {
  collection: "Products"
});

module.exports = model("Product", productsSchema);