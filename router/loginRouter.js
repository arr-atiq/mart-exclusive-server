// external import
const express = require("express");

// internal import
const { doLogin } = require("../controller/doLogin");

const router = express.Router();

router.post("/login", doLogin);

module.exports = router;
