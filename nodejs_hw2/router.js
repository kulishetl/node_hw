const express = require("express");
const config = require("./config/config");
const pizzaRouter = require("./routes/pizza");
const orderRouter = require("./routes/order");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const router = express.Router();

const { pizza, order, login, register } = config.routes;
router.use(pizza, pizzaRouter);
router.use(order, orderRouter);
router.use(login, loginRouter);
router.use(register, registerRouter);

module.exports = router;
