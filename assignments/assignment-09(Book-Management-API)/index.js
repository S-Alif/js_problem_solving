const express = require('express');
const router = express.Router()
const resource = require('./books.js')

// routes
router.get("/books", resource.getAllBooks)
router.get("/books/:id", resource.get_single_book)
router.post("/books", resource.create_new_book)
router.put("/books/:id", resource.update_book)
router.delete("/books/:id", resource.delete_book)

module.exports = router