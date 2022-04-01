const express = require("express");
const { addCategory, getCategories } = require("../controller/category");
const checkLogin = require("../middlewares/checkLogin");
const { adminMiddleware } = require("../middlewares/checkRole");
const router = express.Router();

router.post("/category/create", checkLogin, adminMiddleware, addCategory);
router.get("/category/getCategory", getCategories);

module.exports = router;
