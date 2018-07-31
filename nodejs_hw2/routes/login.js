const express = require("express");
const config = require("../config/config");
const router = express.Router();
const logins = {};

const { root } = config.routes;

router.post(root, (req, res) => {
  const id = Object.keys(logins).length;
  logins[id] = req.body;
  res.end();
});

module.exports = router;
