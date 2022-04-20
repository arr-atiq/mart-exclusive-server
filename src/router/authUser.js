const express = require("express");
const { signupHelper, signinHelper } = require("../controller/authUser");

const {
  validateSignupRequest,
  validateSigninRequest,
  isRequestValidated,
} = require("../validators/signupValidator");
const router = express.Router();

router.post(
  "/user/signup",
  validateSignupRequest,
  isRequestValidated,
  signupHelper
);

router.post(
  "/user/signin",
  validateSigninRequest,
  isRequestValidated,
  signinHelper
);

module.exports = router;
