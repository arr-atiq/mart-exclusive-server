// external import
const express = require("express");

// internal import
const { getAllUsers } = require("../controller/getAllUsers");
const { getAUser } = require("../controller/getAUser");

const router = express.Router();

router.get("/users", getAllUsers);

router.get("/:id", getAUser);

module.exports = router;
