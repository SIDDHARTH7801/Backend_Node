const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    items: [{
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        image: {
            type: String,
            require: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        reviews: {
            type: {
                rate: Number,
                count: Number
            },
            required: true
        },
        category: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
    }]
});

const getAllOrders = async () => {
    try {
      const orders = await OrderModel.find();
      return orders;
    } catch (error) {
      throw new Error(error.message);
    }
  };

const OrderModel = mongoose.model('order', orderSchema);

module.exports = { OrderModel, getAllOrders };