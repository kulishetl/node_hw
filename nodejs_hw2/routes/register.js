const express = require("express");
const config = require("../config/config");
const router = express.Router();
const registers = {};

const { root } = config.routes;

router.post(root, (req, res) => {
  const id = Object.keys(registers).length;
  registers[id] = req.body;
  res.end();
});

module.exports = router;
