const mongoose = require("mongoose");

const singleProductSchema = new mongoose.Schema({
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
  colors: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    default: "latkan",
  },
  featured: {
    type: Boolean,
    default: null,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  image: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const singleProduct = mongoose.model("singleProduct", singleProductSchema);

module.exports = singleProduct;
