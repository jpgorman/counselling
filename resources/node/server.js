var express = require("express")
var path = require("path")
var open = require("open")
var compression = require("compression")
var helmet = require("helmet")
// import favicon from "serve-favicon"

/*eslint-disable no-console */

const port = process.env.PORT || 8887
const host = process.env.HOST || "http://localhost"
const app = express()

app.use(helmet())
app.use(compression())
app.use(express.static("public"))
// app.use(favicon(path.join(__dirname,"assets","public","favicon.ico")))

app.get("*", function(req, res) {
  try {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
  } catch (e) {
    res.status(500).send("Internal Server Error")
  }

})

app.listen(port, function(err) {
  if (err) {
    console.log(err)
  } else {
    open(`${host}:${port}`)
  }
})
