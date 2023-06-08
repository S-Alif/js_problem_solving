// get the product model
const productModel = require("../models/product-model")
// get the app
const app = require('../../index')


// demo product data
let productData = {    
    name:["Apple", "Book", "Fruits", "Fork", "Toys", "Orange", "Electricity"],
    price:[1000, 2000, 101, 201, 400, 500],
    description:["A new product", "A good product", "A fine product", "The best product", "Its a product"]    
}
// generate random number / position for demo data Array
let getPosition = (size) => {
    return Math.floor(Math.random() * size)
}



//insert product data
exports.insert_data = async (req, res) => {
    try{
        let data = new productModel({
            name: "" + productData.name[getPosition(productData.name.length)],
            price: "" + productData.price[getPosition(productData.price.length)],
            description: "" + productData.description[getPosition(productData.description.length)],
            createdAt: ""+ new Date
        })
        
        // save data or catch the error
        await data.save().then(e => {
            res.json({
                message: "product inserted",
                data: e
            })
        }).catch((err) => {
            res.json({
                message: "product insert failed",
                data: err
            })
        })
    }
    catch(err){
        console.log(err)
    }
}

// get all the products
exports.get_allData = async (req, res) => {
    try {
        let productData = await productModel.find({}, {_id:0, createdAt:0, description:0})

        if(productData != ""){
            res.json({
                message: "product data found",
                data: productData
            })
        }
        else{
            res.json({
                message:"there is no product"
            })
        }
        
        
    } catch (error) {
        console.log(error)
    }
}