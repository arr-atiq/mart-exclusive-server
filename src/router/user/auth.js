const express = require("express");
const {
  signupHelper,
  signinHelper,
  afterSignin,
} = require("../../controller/user/auth");
const router = express.Router();

router.post("/signup", signupHelper);

router.post("/signin", signinHelper);

router.post("/profile", afterSignin, (req, res) => [
  res.status(200).json({ message: "user profile!" }),
]);

module.exports = router;
