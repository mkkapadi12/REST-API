const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided !"],
  },
  MRP: {
    type: Number,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    reruired: true,
    default: "latkan",
  },
  shipping: {
    type: Boolean,
    default: null,
  },
  featured: {
    type: Boolean,
    default: null,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const product = mongoose.model("Product", productSchema);

module.exports = product;
