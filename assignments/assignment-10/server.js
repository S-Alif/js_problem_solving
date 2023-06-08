// require packages
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './src/tokenManager/secret.env'})

// require router and app
const app = require('./index');

// get base
app.get('/', (req, res) => {
    res.json({
        "message": "the server is running"
    });
})

// copy and paste the database name here
const databaseName = "product-management"

// connecting to mongodb
mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`)
    .then(() => console.log("database connected"))
    .catch(err => console.log(err))


// listen to port 3000
app.listen(process.env.secretPort, () => {
    console.log("server-running")
})