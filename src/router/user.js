const express = require("express");
const { signupHelper } = require("../controller/user");
const router = express.Router();

router.post("/signup", signupHelper);

router.post("/signin", (req, res) => {});

module.exports = router;
