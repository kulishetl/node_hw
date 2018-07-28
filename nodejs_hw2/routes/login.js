const express = require("express");
const router = express.Router();
const logins = {};

router.post("/", (req, res) => {
  const id = Object.keys(logins).length;
  logins[id] = req.body;
  res.end();
});

module.exports = router;
