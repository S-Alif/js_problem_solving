const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

// get request to /protected
app.get('/protected', authenticate, (req, res) => {
    res.json({
        message: "protected"
    })
})


// the function that authenticate the token
let authenticate = (req, res, next) => {
    const token = req.headers['authorization']

    if (!token) {
        return res.status(401).json({
            status: "401",
            TokenState: "no token found",
            message: "data retrieve blocked"
        })
    }

    jwt.verify(token, process.env.secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: "401",
                message: "Unauthorized error"
            })
        }
        next()
    })
}