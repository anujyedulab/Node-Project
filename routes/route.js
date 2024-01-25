// routes.js

const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Welcome to our Ecommerce App");
});

module.exports = router;
