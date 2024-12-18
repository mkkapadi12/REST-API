const singleProduct = require("../models/singleProduct");

const getAllSingleProducts = async (req, res) => {
  const { id } = req.query;
  const queryObject = {};

  // console.log(id);

  if (id) {
    queryObject.id = id;
  }

  let apiData = singleProduct.find(queryObject);

  const data = await apiData;
  res.status(200).json(data);
};

module.exports = { getAllSingleProducts };
