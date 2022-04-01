const Category = require("../models/categorySchema");
const slugify = require("slugify");

exports.addCategory = async (req, res) => {
  try {
    const categoryObj = {
      name: req.body.name,
      slug: slugify(req.body.name),
    };

    if (req.body.parentId) {
      categoryObj.parentId = req.body.parentId;
    }

    const categoryData = new Category(categoryObj);
    const createdCategory = await categoryData.save();

    if (createdCategory) {
      res.status(201).json({ createdCategory });
    } else {
      res.status(400).json({ error: "Added category failed" });
    }
  } catch {
    res.status(400).json({ error: "something went wrong!" });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categoriesData = await Category.find();
    if (categoriesData.length > 0) {
      res.status(200).json({ categoriesData });
    } else {
      res.status(400).json({ error: "Category did not find!" });
    }
  } catch {
    res.status(400).json({ error: "something went wrong!" });
  }
};
