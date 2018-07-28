const express = require("express");
const router = express.Router();
const pizzas = {};

router.get("/", (req, res) => {
  res.json(pizzas);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!pizzas[id]) {
    res.status(404).end();
  } else {
    res.json(pizzas[id]);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  if (!pizzas[id]) {
    res.status(404).end();
  } else {
    pizzas[id] = req.body;
    res.end();
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  delete pizzas[id];
  res.end();
});

router.post("/:id", (req, res) => {
  const { id } = req.params;

  pizzas[id] = req.body;
  res.end();
});

module.exports = router;
