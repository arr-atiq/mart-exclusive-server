const express = require("express");
const { signupHelper, signinHelper } = require("../controller/authAdmin");

const {
  validateSignupRequest,
  validateSigninRequest,
  isRequestValidated,
} = require("../validators/signupValidator");
const router = express.Router();

router.post(
  "/admin/signup",
  validateSignupRequest,
  isRequestValidated,
  signupHelper
);

router.post(
  "/admin/signin",
  validateSigninRequest,
  isRequestValidated,
  signinHelper
);

module.exports = router;
