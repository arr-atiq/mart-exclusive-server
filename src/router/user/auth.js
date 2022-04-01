const express = require("express");
const { signupHelper, signinHelper } = require("../../controller/user/auth");
const checkLogin = require("../../middlewares/checkLogin");
const {
  validateSignupRequest,
  validateSigninRequest,
  isRequestValidated,
} = require("../../validators/signupValidator");
const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signupHelper);

router.post("/signin", validateSigninRequest, isRequestValidated, signinHelper);

router.post("/profile", checkLogin, (req, res) => [
  res.status(200).json({ message: "user profile!" }),
]);

module.exports = router;
