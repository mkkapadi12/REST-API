const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, sort, select, page, limit } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObject);

  //sorting product
  if (sort) {
    const sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }

  //select product
  if (select) {
    // const selectFix = select.replace(",", " ");
    const selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let pages = Number(req.query.page) || 1;
  let limits = Number(req.query.limit) || 6;

  let skip = (pages - 1) * limits;

  // console.log("Data :", queryObject);

  const Products = await apiData.skip(skip).limit(limits);
  res.status(200).json({ Products, nbHits: Products.length });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).select("name price");
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
