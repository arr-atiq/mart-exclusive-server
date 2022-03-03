// external import
const express = require("express");

// internal import
const { doUpdate } = require("../controller/doUpdate");

const router = express.Router();

router.put("/:id", doUpdate);

module.exports = router;
