const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({

  user: { type: mongoose.Schema.Types.ObjectId, required: true },
  items: [
    { type: mongoose.Schema.Types.ObjectId, required: true }
  ],
  totalAmount: { type: Number, required: true, min: 0 },
  shippingAddress: { type: String, required: true },
  status: { type: String, required: true, default: "Pending" }

}, { timestamps: true, versionKey: false })


module.exports = mongoose.model("Order", orderSchema)