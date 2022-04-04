const express = require("express");
const { addProduct } = require("../controller/product");
const checkLogin = require("../middlewares/checkLogin");
const { adminMiddleware } = require("../middlewares/checkRole");
const router = express.Router();

router.post("/product/create", checkLogin, adminMiddleware, addProduct);
// router.get("/product/getCategory", getCategories);

module.exports = router;
