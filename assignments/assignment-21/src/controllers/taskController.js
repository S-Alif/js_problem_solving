const salesModel = require("../models/salesModel")


// create a product
exports.createSales = async (req, res) => {
  try {
    let saleProduct = await salesModel.create(req.body)

    res.status(200).json({
      status: 1,
      data: saleProduct
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// total revenue
exports.totalRevenue = async (req, res) => {
  try {
    let groupStage = { $group: { _id: null, totalSales: { $sum: "$quantity" }, totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } }, totalSoldAt: { $sum: { $multiply: ["$quantity", "$soldAt"] } } }}
    let projetcStage = { $project: { _id: 0, totalSales: 1, total_Buying_Price: "$totalPrice", total_selling_price: "$totalSoldAt", totalRevenue: { $subtract: ["$totalSoldAt", "$totalPrice"]}}}

    let totalRevenue = await salesModel.aggregate([groupStage, projetcStage])

    res.status(200).json({
      status: 1,
      data: totalRevenue
    })
    
  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// quantity by product
exports.quantityByProduct = async (req, res) => {
  try {
    let groupStage = { $group: { _id: "$product", totalSale: { $sum: "$quantity" } } }
    let projetcStage = { $project: { _id: 0, product: "$_id", totalSale: 1} }
    let quantityByProduct = await salesModel.aggregate([groupStage, projetcStage])

    res.status(200).json({
      status: 1,
      data: quantityByProduct
    })
    
  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// top products
exports.topProducts = async (req, res) => {
  try {
    let groupStage = { $group: { _id: "$product", totalSales: { $sum: "$quantity" }, totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } }, totalSoldAt: { $sum: { $multiply: ["$quantity", "$soldAt"] } } }}
    let projetcStage = { $project: { product: "$_id", _id: 0, totalSales: 1, totalRevenue: { $subtract: ["$totalSoldAt", "$totalPrice"] } }}
    let sortStage = {$sort: { totalRevenue: -1 }}
    let limitStage = {$limit: 5}

    let topProducts = await salesModel.aggregate([groupStage, projetcStage, sortStage, limitStage])

    res.status(200).json({
      status: 1,
      data: topProducts
    })
    
  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// average price
exports.avgPrice = async (req, res) => {
  try {

    let avgPrice = await salesModel.aggregate([
      {
        $group:{
          _id: null,
          totalSales: { $sum: "$quantity" },
          totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } },
          totalSoldAt: { $sum: { $multiply: ["$quantity", "$soldAt"] } }
        }
      },
      {
        $project: {
          _id: 0,
          totalSales: 1,
          totalRevenue: { $subtract: ["$totalSoldAt", "$totalPrice"] }
        } 
      },
      {
        $project: {
          _id: 0,
          totalSales: 1,
          totalRevenue: 1,
          total_avg_price_per_unit_product_sold: { $round: [{ $divide: ["$totalRevenue", "$totalSales"] }, 2] }
        }
      }
    ])
    let avgPrice_per_product = await salesModel.aggregate([
      {
        $group:{
          _id: "$product",
          totalSales: { $sum: "$quantity" },
          totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } },
          totalSoldAt: { $sum: { $multiply: ["$quantity", "$soldAt"] } }
        }
      },
      {
        $project: {
          _id: 1,
          product: "$_id",
          totalSales: 1,
          totalRevenue: { $subtract: ["$totalSoldAt", "$totalPrice"] }
        } 
      },
      {
        $project: {
          _id: 0,
          product: "$_id",
          totalSales: 1,
          totalRevenue: 1,
          avg_price_per_this_unit_product_sold: { $round: [{ $divide: ["$totalRevenue", "$totalSales"] }, 2] }
        }
      }
    ])

    res.status(200).json({
      status: 1,
      data: {avgPrice: avgPrice[0], avgPrice_per_product}
    })
    
  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// revenue by month
exports.revenueByMonth = async (req, res) => {
  try {
    let groupStage = {
      $group: {
        _id: {
          year: { $year: "$date" },
          month: { $month: "$date" }
        },
        totalPrice: { $sum: { $multiply: ["$quantity", "$price"] } },
        totalSoldAt: { $sum: { $multiply: ["$quantity", "$soldAt"] } }
      }
    }

    let projetcStage = {
      $project: {
        _id: 0,
        month: "$_id.month",
        year: "$_id.year",
        totalRevenue: { $subtract: ["$totalSoldAt", "$totalPrice"] }
      }
    }
    
    let sortStage = {
      $sort: {
        year: -1
      }
    }

    let revenueByMonth = await salesModel.aggregate([groupStage, projetcStage, sortStage])
    
    res.status(200).json({
      status: 1,
      data: revenueByMonth
    })
  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// highest quantity sold
exports.highestQuantitySold = async (req, res) => {
  try {
    let groupStage = {
      $group: {
        _id: {
          product: "$product",
          day: { $dateToString: { format: "%Y-%m-%d", date: "$date" } }
        },
        totalQuantity: { $sum: "$quantity" }
      }
    }

    let sortStage = {
      $sort: { totalQuantity: -1 }
    }

    let limitStage = {
      $limit: 1
    }

    let projetcStage = {
      $project: {
        _id: 0,
        product: "$_id.product",
        totalQuantity: 1,
        date: "$_id.day"
      }
    }

    let highestQuantitySold = await salesModel.aggregate([groupStage, sortStage, limitStage, projetcStage])

    res.status(200).json({
      status: 1,
      data: highestQuantitySold
    })

  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}

// department salary expense
exports.departmentSalaryExpense = async (req, res) => {
  try {
    let departmentSalaryExpense = await salesModel.aggregate([
      {
        $group:{
          _id: "$dept",
          dept_total_product_sale: { $sum: "$quantity"},
          total_salary_exp: {$sum: {$multiply: ["$quantity", "$price"]}},
          dept_total_sale_amount: { $sum: { $multiply: ["$quantity", "$soldAt"] } }
        }
      },
      {
        $project:{
          _id: 0,
          department: "$_id",
          dept_total_product_sale: 1,
          total_salary_exp: 1,
          dept_total_sale_amount: 1,
          dept_total_revenue: { $subtract: ["$dept_total_sale_amount", "$total_salary_exp"]}
        }
      }
    ])

    res.status(200).json({
      status: 1,
      data: departmentSalaryExpense
    })
    
  } catch (error) {
    res.status(200).json({
      status: 0,
      data: error
    })
  }
}