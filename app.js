require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./DB/connect");

//cors
app.use(
  cors({
    origin: "http://localhost:5173/",
    // methods: ["GET", "POST"],
  })
);

//router
const products_routes = require("./routes/products");

//PORT number
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//middleware or to set router

app.use("/api/products", products_routes);

//server start

const start = async () => {
  try {
    //Connect to Database
    await ConnectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server start at port ${port}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
