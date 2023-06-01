const express = require('express');
const router = require('./index.js');
const app = express()

app.use('/', router)


// get base
app.get('/', (req, res) => {
    res.json(
        {
            "message": "the server is running"
        }
    );
});
app.listen(3000, () => {
    console.log("server-running")
})