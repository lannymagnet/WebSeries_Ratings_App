const express = require("express");
const { createUser } = require("../controller/user");
const { validate, userValidator } = require("../middleware/validators");

const router = express.Router();

router.post("/create", userValidator, validate, createUser);

module.exports = router;
