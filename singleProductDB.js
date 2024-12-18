require("dotenv").config();
const ConnectDB = require("./DB/connect");
const singleProduct = require("./models/singleProduct");
const singleProductJson = require("./singleProduct.json");

const start = async () => {
  try {
    await ConnectDB(process.env.MONGODB_URL);
    await singleProduct.deleteMany();
    await singleProduct.create(singleProductJson);
    console.log("Success !");
  } catch (error) {
    console.log(error);
  }
};

start();
