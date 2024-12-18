const express = require("express");
const { getAllSingleProducts } = require("../controller/singleProduct");

const router = express.Router();

router.route("/").get(getAllSingleProducts);


module.exports = router;
