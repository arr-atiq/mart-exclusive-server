// external import
const express = require("express");

// internal import
const { dosignup } = require("../controller/doSignup");

const router = express.Router();

router.post("/", dosignup);

module.exports = router;
