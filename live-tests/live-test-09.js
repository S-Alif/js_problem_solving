const mongoose = require('mongoose');

const dataBase = "databse url"

// connecting to mongodb
mongoose.connect(dataBase)
    .then(() => console.log("database connected"))
    .catch(err => console.log(err))


//collection schema
var schema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
            minlength: 3
        },
        email: {
            required: true,
            type: String,
            unique: true
        },
        Age: {
            required: false,
            type: Number,
            minimum: 18
        },
        Password: {
            required: true,
            type: String,
            minlength: 6
        }
    }
);


// change the collection name here
let collectionName = "user"
let userModel = new mongoose.model(collectionName, schema);