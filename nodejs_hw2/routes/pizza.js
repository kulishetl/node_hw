const express = require("express");
const config = require("../config/config");
const router = express.Router();
const pizzas = {};

const { root, param } = config.routes;

router.get(root, (req, res) => {
  res.json(pizzas);
});

router.get(param, (req, res) => {
  const { id } = req.params;

  if (!pizzas[id]) {
    res.status(404).end();
  } else {
    res.json(pizzas[id]);
  }
});

router.put(param, (req, res) => {
  const { id } = req.params;

  if (!pizzas[id]) {
    res.status(404).end();
  } else {
    pizzas[id] = req.body;
    res.end();
  }
});

router.delete(param, (req, res) => {
  const { id } = req.params;
  delete pizzas[id];
  res.end();
});

router.post(param, (req, res) => {
  const { id } = req.params;

  pizzas[id] = req.body;
  res.end();
});

module.exports = router;
