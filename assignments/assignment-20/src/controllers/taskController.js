const productModel = require('../models/prodcutModel')
const cartModel = require('../models/cartItemModel')
const orderModel = require('../models/orderModel')

// create a product
exports.createProduct = async (req, res) => {
  try {
    let product = await productModel.create(req.body)

    res.status(200).json({
      status: 1,
      data: product
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// carts
exports.enterItemToCart = async (req, res) => {
  try {
    let cart = await cartModel.create(req.body)

    res.status(200).json({
      status: 1,
      data: cart
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// retrieve carts
exports.retrieveCart = async (req, res) => {
  try {
    let id = req.params.id
    let cart = await cartModel.aggregate([
      { $match: { $expr: { $eq: ['$user', { $toObjectId: id }] } } },
      {
        $lookup: {
          from: "users", localField: "user", foreignField:"_id", pipeline: [{
            $project: {
              firstName: 1,
              lastName: 1,
              _id: 0
            }
          }],
          as: "userData"
        }
      },
      {
        $lookup: {
          from: "products", localField: "product", foreignField: "_id", pipeline: [
            {
              $lookup:{from: }
            },
            {
            $project: {
              name: 1,
              imageURL: 1,
              price: 1,
              _id: 0
            }
          }
        ],
          as: "productData"
        }
      },
      
      {
        $project:{
          _id: 0,
          createdAt: 0,
          updatedAt: 0,
        }
      },
      { $unwind: "$userData" },
      { $unwind: "$productData" },
    ])

    res.status(200).json({
      status: 1,
      data: cart
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// order
exports.postOrder = async (req, res) => {
  try {
    let order = await orderModel.create(req.body)

    res.status(200).json({
      status: 1,
      data: order
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// get order
exports.getOrder = async (req, res) => {
  try {
    let id = req.params.id
    let order = await orderModel.aggregate([
      { $match: { $expr: { $eq: ['$user', { $toObjectId: id }] } } },
      {
        $lookup: {
          from: "users", localField: "user", foreignField: "_id", pipeline: [{
            $project: {
              firstName: 1,
              lastName: 1,
              _id: 0
            }
          }],
          as: "userData"
        }
      },
      {
        $lookup: {
          from: "cartitems", localField: "user", foreignField: "user", pipeline: [
            {
              $lookup: {
                from: 'products',
                localField: 'product',
                foreignField: '_id',pipeline: [
                  {
                    $project: {
                      name: 1,
                      price: 1,
                      imageURL: 1,
                      _id: 0
                    }
                  }
                ],
                as: 'productDetails'
              }
            },
            {
            $project: {
              quantity:1,
              productDetails: 1,
              _id: 0
            }
          }
        ],
          as: "productData"
        }
      },
      {
        $project:{
          _id: 0,
          user: 0,
          items: 0,
          createdAt: 0,
          updatedAt: 0
        }
      },
      {$unwind: "$userData"}
    ])

    res.status(200).json({
      status: 1,
      data: order
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}