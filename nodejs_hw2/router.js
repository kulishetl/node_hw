const express = require("express");
const pizzaRouter = require("./routes/pizza");
const orderRouter = require("./routes/order");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const router = express.Router();

router.use("/pizza", pizzaRouter);
router.use("/order", orderRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);

module.exports = router;
