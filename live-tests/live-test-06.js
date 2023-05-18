const express = require('express');
const app = express()

// demo user array
let userArray = [
    {
        name: "john",
        age: "40"
    },
    {
        name: "jane",
        age: "30"
    },
    {
        name: "Smith",
        age: "20"
    },
    {
        name: "Anderson",
        age: "80"
    },
]

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/users', (req, res) => {
    res.json({
        message: "user data",
        data: userArray
    })
})

app.listen(8000, () => {
    console.log("server running")
})