// packages
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const dotenv = require('dotenv');

// app
const app = express()

// router
const router = require('./src/routes/routes')

// security
app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb' }))

// route
app.use('/api/sales', router)

// dotenv
dotenv.config()

// database connection
mongoose.connect(process.env.db)
  .then(res => console.log("database connected"))
  .catch(err => console.log(err))


module.exports = app