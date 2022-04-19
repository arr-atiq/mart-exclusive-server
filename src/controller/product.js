const slugify = require("slugify");
const Product = require("../models/productSchema");
exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, category, quantity, createdBy } =
      req.body;
    let productPictures = [];
    if (req.files.length > 0) {
      productPictures = req.files.map((file) => {
        return { img: file.filename };
      });
    }
    const product = new Product({
      name,
      slug: name,
      price,
      description,
      productPictures,
      category,
      quantity,
      createdBy: req.id,
    });
    const result = await product.save();
    if (result) {
      res.status(200).json({ product: product });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
