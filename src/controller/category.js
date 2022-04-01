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
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
