// external import
const express = require("express");

// internal import
const { doDelete } = require("../controller/doDelete");

const router = express.Router();

router.delete("/:id", doDelete);

module.exports = router;
