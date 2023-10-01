const express = require('express')
const router = express.Router()

const taskController = require('../controllers/taskController')

router.get('/total-revenue', taskController.totalRevenue)
router.get('/quantity-by-product', taskController.quantityByProduct)
router.get('/top-products', taskController.topProducts)
router.get('/average-price', taskController.avgPrice) 
router.get('/revenue-by-month', taskController.revenueByMonth)
router.get('/highest-quantity-sold', taskController.highestQuantitySold)
router.get('/department-salary-expense', taskController.departmentSalaryExpense)


router.post('/enter-sales', taskController.createSales)

module.exports = router