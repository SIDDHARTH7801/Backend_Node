// Inside order.routes.js

const express = require("express");
const OrderRouter = express.Router();
const order_controller = require("../Controllers/order.controller");

OrderRouter.get("/getallorders", order_controller.GetAllOrders);

module.exports = OrderRouter;
