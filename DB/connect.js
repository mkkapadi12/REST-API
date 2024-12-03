const mongoose = require("mongoose");

// const url = process.env.MONGODB_URL;

const ConnectDB = (url) => {
  console.log("connect to database!");

  return mongoose.connect(url);
};

module.exports = ConnectDB;
