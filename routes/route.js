// routes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to our Ecommerce App');
});

module.exports = router;
