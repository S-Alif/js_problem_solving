// get all the packages
const express = require('express')
const app = express()
const router = express.Router()
const products = require('./src/controllers/product-controller')
const tokenManager = require('./src/tokenManager/tokenManager')

app.use('/', router)

// routes
router.get('/user', tokenManager.userLogin)     /* this route is for generating token */
router.get('/products', tokenManager.authenticate, products.get_allData)
router.post('/products', products.insert_data)

module.exports = app