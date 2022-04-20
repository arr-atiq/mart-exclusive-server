const express = require("express");
const { addCategory, getCategories } = require("../controller/category");
const checkLogin = require("../middlewares/checkLogin");
const { adminMiddleware } = require("../middlewares/checkRole");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const shortid = require("shortid");

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
  "/category/create",
  checkLogin,
  adminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/category/getCategory", getCategories);

module.exports = router;
