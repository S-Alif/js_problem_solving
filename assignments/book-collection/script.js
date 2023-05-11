// get express
const express = require('express')
const path = require('path')
const crypto = require('crypto')

const app = express()


let booklist = []

//demo titles and authors
let titles = ["CSS BOOK", "HTML book", "JS BOOK", "Programming book"]
let authors = ["CSS guy", "HTML guy", "JS guy", "Programming guy"]

// get route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

// books route
app.get("/books", (req, res) => {
    if(res.status == 200){
        res.json({
            sucess: true,
            data: booklist
        })
    }
    else{
        res.json({
            sucess: false,
            data: booklist
        })
    }
})

// posting books
app.post("/books", (req, res) => {
    let date = new Date()
    let data = {
        id: `${crypto.randomUUID()}`,
        title: `${titles[Math.floor(Math.random() * titles.length)]}`,
        author: `${authors[Math.floor(Math.random() * authors.length)]}`,
        publishedDate: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    }
    booklist.push(data)

    res.json({
        message:"data entered successfully",
        data: data
    })
})

// deleting book
app.delete("/books/:id", (req, res) => {
    let listLength = booklist.length
    let deleteId = req.params.id
    let newList = booklist.filter(filtered => filtered.id != deleteId)
    booklist = newList

    if(listLength != booklist.length){
        res.json({
            message: "data deleted successfully",
        })
    }
    else{
        res.json({
            message: "Book id dont match"
        })
    }
})

app.listen(3000, () => {
    console.log("server running")
})