const mongoose = require('mongoose');

// demo book data
let demoAuthor = ["CSS guy", "HTML guy", "JS guy", "Programming guy", "developer guy"]
let demoBooks = ["CSS book", "HTML book", "JS book", "Programming book", "developer book"]
let demoDescription = ["The CSS book", "The HTML book", "The JS book", "The Programming book", "The developer book"]
let demoYear = ["2013", "2021", "2019", "2023", "2020"]

// copy and paste the database name here
const databaseName = "book-management"

// connecting to mongodb
mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`)
    .then(() => console.log("database connected"))
    .catch(err => console.log(err))


//collection schema
var body = new mongoose.Schema(
    {
        title: {
            type: String
        },
        author: {
            type: String
        },
        description: {
            type: String
        },
        publishedYear: {
            type: String
        }
    },
    {
        versionKey: false
    }
);


// change the collection name here
let collectionName = "books"
let bookModel = new mongoose.model(collectionName, body);

// get all books
exports.getAllBooks = async (req, res) => {
    try {
        let bookData = await bookModel.find()
        if (bookData == "") {
            res.json(
                {
                    message: "there is no data",
                }
            )
        }
        else {
            res.json(
                {
                    message: "data found",
                    data: bookData
                }
            )
        }
    }
    catch (err) {
        console.log(err)
    }
}


//get a single book by id
exports.get_single_book = async (req, res) => {
    try {
        let bookData = await bookModel.findById(req.params.id)
        if (!bookData) {
            res.json({
                message: "data not found",
            })
        }
        else {
            res.json({
                message: "data found",
                data: bookData
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}



//create a new book
// I have used some demo data for testing purpose
// we can also add data from "body" in postman
exports.create_new_book = async (req, res) => {
    let bookData = new bookModel(
        {
            title: "" + demoBooks[Math.floor(Math.random() * demoBooks.length)],
            author: "" + demoAuthor[Math.floor(Math.random() * demoAuthor.length)],
            description: "" + demoDescription[Math.floor(Math.random() * demoDescription.length)],
            publishedYear: "" + demoYear[Math.floor(Math.random() * demoYear.length)]
        }
    )

    // save the data
    await bookData.save().then(data => {
        res.status(200).send(
            {
                message: "book-data saved",
                data: data
            }
        )
    }).catch(err => console.log(err))
}



//update a book by id
// I used the demo data to change the data
// we can also update it from "body" in postman
exports.update_book = async (req, res) => {
    try {
        let updateBookData = {
            title: "" + demoBooks[Math.floor(Math.random() * demoBooks.length)],
            author: "" + demoAuthor[Math.floor(Math.random() * demoAuthor.length)],
            description: "" + demoDescription[Math.floor(Math.random() * demoDescription.length)],
            publishedYear: "" + demoYear[Math.floor(Math.random() * demoYear.length)]
        }

        let options = { new: true }
        let OldbookData = await bookModel.findById(req.params.id)
        if(OldbookData){
            let NewbookData = await bookModel.findByIdAndUpdate(req.params.id, updateBookData, options)

            res.json(
                {
                    message: "book data updated",
                    oldData: OldbookData,
                    newBookData: NewbookData
                }
            )
        }
        else{
            res.json(
                {
                    message: "book data no found",
                }
            )
        }
        
    }
    catch (err) {
        console.log(err)
    }
}



//delete a single book by id
exports.delete_book = async (req, res) => {
    let bookData = await bookModel.findByIdAndRemove(req.params.id)
    if (bookData) {
        res.json({
            message: "book deleted",
        })
    }
    else {
        res.json({
            message: "book data not found",
        })
    }
}