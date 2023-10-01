const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({

  user: { type: mongoose.Schema.Types.ObjectId, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true, min: 0 }

}, { timestamps: true, versionKey: false })


module.exports = mongoose.model("CartItem", cartSchema)