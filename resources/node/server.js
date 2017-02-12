/*eslint-disable no-console */
const prismic = require("prismic.io")
const express = require("express")
const path = require("path")
const open = require("open")
const compression = require("compression")
const helmet = require("helmet")
const session = require("cookie-session")

const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
const port = process.env.PORT || 8887
const host = process.env.HOST || "http://localhost"
const app = express()

const errorHandler = (res) => (err) => {
  console.log("Something went wrong: ", err)
  res.status(500).send("Internal Server Error")
}

const responseHandler = (res, handler) => (data) => {
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(handler(data)))
}

app.use(session({
  name: "session",
  keys: ["key1"],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: "catchappell.co.uk",
    path: "/",
    expires: expiryDate
  }
}))
app.use(helmet())
app.use(compression())
app.use(express.static("public"))

app.get("/blog", function(req, res) {
  prismic.api("https://catchappell.prismic.io/api").then(function(api) {
    return api.query(
      prismic.Predicates.at("document.type", "blog_post"),
      { orderings : "[blog_post.date desc]" }
    )
  })
  .then(responseHandler(res, (data) => data.results))
  .catch(errorHandler(res))
})

app.get("/blog/:uid", function(req, res) {
  const uid = req.params.uid
  prismic.api("https://catchappell.prismic.io/api").then(function(api) {
    return api.getByUID("blog_post", uid)
  })
  .then(responseHandler(res, (data) => data))
  .catch(errorHandler(res))
})

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
