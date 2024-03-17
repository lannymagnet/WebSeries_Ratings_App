const express = require("express");
const { createUser } = require("../controller/user");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from home page.");
});

router.post("/create", createUser);

module.exports = router;
