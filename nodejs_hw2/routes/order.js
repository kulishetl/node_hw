const express = require("express");
const router = express.Router();
const orders = {};

router.get("/", (req, res) => {
  res.json(orders);
});

router.post("/", (req, res) => {
  const id = Object.keys(orders).length;
  orders[id] = req.body;
  res.end();
});

module.exports = router;
