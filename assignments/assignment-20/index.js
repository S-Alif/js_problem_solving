const app = require('./app')
let port = process.env.port || 8080

app.listen(process.env.port, () => {
  console.log("app running on " + port)
})