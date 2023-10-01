const mongoose = require('mongoose')

const salesSchema = mongoose.Schema({

  product: { type: String, required: true },
  quantity: { type: Number },
  price: { type: Number },
  date: { type: Date },

  // for salary expense
  dept: {type : String},
  soldAt: {type : Number} /* the price each product was sold to a customer*/

}, { timestamps: true, versionKey: false })


module.exports = mongoose.model("sales", salesSchema)