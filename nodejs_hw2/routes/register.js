const express = require("express");
const router = express.Router();
const registers = {};

router.post("/", (req, res) => {
  const id = Object.keys(registers).length;
  registers[id] = req.body;
  res.end();
});

module.exports = router;
