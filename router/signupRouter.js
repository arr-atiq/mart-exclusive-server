// external import
const express = require("express");

// internal import
const { signupController } = require("../controller/signupController");

const router = express.Router();

router.post("/api/signup", signupController);

module.exports = router;
