const express = require("express");
const { addItemToCart } = require("../controller/cart");
const checkLogin = require("../middlewares/checkLogin");
const { userMiddleware } = require("../middlewares/checkRole");
const router = express.Router();

router.post("/cart/addToCart", checkLogin, userMiddleware, addItemToCart);

module.exports = router;
