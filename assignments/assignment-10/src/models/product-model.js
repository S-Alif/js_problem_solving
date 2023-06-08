// require mongoose
const mongoose = require('mongoose');

// schema for procucts
let newSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "enter product name"]
    },
    price: {
        type: Number,
        required: [true, "enter product price"]
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date
    },

}, { versionKey: false })

// change the collection name here
let collectionName = "products"
let productModel = new mongoose.model(collectionName, newSchema);

module.exports = productModel