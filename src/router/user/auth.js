const express = require("express");
const { signupHelper, signinHelper } = require("../../controller/user/auth");
const checkLogin = require("../../middlewares/checkLogin");
const {
  signupValidator,
  isSignUpValidated,
} = require("../../validators/signupValidator");
const router = express.Router();

router.post("/signup", signupValidator, isSignUpValidated, signupHelper);

router.post("/signin", signinHelper);

router.post("/profile", checkLogin, (req, res) => [
  res.status(200).json({ message: "user profile!" }),
]);

module.exports = router;
