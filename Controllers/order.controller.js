// Inside order.controller.js

const { OrderModel } = require("../Models/order.model");

// get all orders
async function GetAllOrders(req, res) {
  try {
    const orders = await OrderModel.find();
    res.status(200).json({ message: "All orders fetched successfully", orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  GetAllOrders,
};
