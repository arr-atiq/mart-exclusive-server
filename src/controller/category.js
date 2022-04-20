const Category = require("../models/categorySchema");
const slugify = require("slugify");

const organisedCategory = (category, parentId = null) => {
  const categoryListItem = [];
  let categoryData;
  if (parentId === null) {
    categoryData = category.filter((item) => item.parentId === undefined);
  } else {
    categoryData = category.filter(
      (item) => item.parentId === parentId.toString()
    );
  }

  for (let item of categoryData) {
    const categoryObj = {
      _id: item?._id,
      name: item?.name,
      slug: item?.slug,
      children: organisedCategory(category, item?._id),
    };
    if (categoryObj?.children.length < 1) {
      delete categoryObj?.children;
    }
    categoryListItem.push(categoryObj);
  }

  return categoryListItem;
};

exports.addCategory = async (req, res) => {
  try {
    const categoryObj = {
      name: req.body.name,
      slug: slugify(req.body.name),
    };
    if (req.file) {
      categoryObj.categoryImage =
        process.env.API + "/public/" + req.file.filename;
    }

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

exports.getCategories = async (req, res) => {
  try {
    const categoriesData = await Category.find();
    if (categoriesData.length > 0) {
      const categoryList = organisedCategory(categoriesData);
      // console.log(categoryList);
      res.status(200).json({ categoryList });
    } else {
      res.status(400).json({ error: "Category did not find!" });
    }
  } catch (error) {
    res.status(400).json({ getCategoriesError: error });
  }
};
