const express = require("express");
const config = require("../config/config");
const router = express.Router();
const orders = {};

const { root } = config.routes;

router.get(root, (req, res) => {
  res.json(orders);
});

router.post(root, (req, res) => {
  const id = Object.keys(orders).length;
  orders[id] = req.body;
  res.end();
});

module.exports = router;
