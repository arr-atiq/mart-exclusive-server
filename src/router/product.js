const express = require("express");
const multer = require("multer");
const shortid = require("shortid");
const { addProduct } = require("../controller/product");
const path = require("path");
const checkLogin = require("../middlewares/checkLogin");
const { adminMiddleware } = require("../middlewares/checkRole");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/product/create",
  checkLogin,
  adminMiddleware,
  upload.array("productPictures"),
  addProduct
);
// router.get("/product/getCategory", getCategories);

module.exports = router;
