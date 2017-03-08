/*eslint-disable no-console */
// const prismic = require("prismic.io")
const express = require("express")
const path = require("path")
const open = require("open")
const compression = require("compression")
const helmet = require("helmet")
const session = require("cookie-session")
// const allowCrossDomain = require("./middleware/allow-cross-domain")

// const prismicConfig = require("./prismic-config")

const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
const port = process.env.PORT || 5000
const host = process.env.HOST || "http://localhost"
const app = express()

// const errorMap = {
//   404: "404 not found",
//   500: "Internal Server Error",
// }

// const errorHandler = (res) => (err) => {
//   console.log("Something went wrong: ", err)
//   res.status(err.status).send(errorMap[err.status] || errorMap[500])
// }

// const responseHandler = (res, handler) => (data) => {
//   res.setHeader("Content-Type", "application/json")
//   res.send(JSON.stringify(handler(data)))
// }

// const api = () => prismic.api(prismicConfig.apiEndpoint)
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
// app.use(allowCrossDomain)

// app.get("/blog", function(req, res) {
//   api().then(function(api) {
//     return api.query(
//       prismic.Predicates.at("document.type", "blog_post"),
//       { orderings : "[blog_post.date desc]" }
//     )
//   })
//   .then(responseHandler(res, (data) => data.results))
//   .catch(errorHandler(res))
// })
//
// app.get("/blog/:uid", function(req, res) {
//   const uid = req.params.uid
//   api().then(function(api) {
//     return api.getByUID("blog_post", uid)
//   })
//   .then(responseHandler(res, (data) => data))
//   .catch(errorHandler(res))
// })

app.get("*", function(req, res) {
  try {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
  } catch (e) {
    errorHandler(res)
  }

})

app.listen(port, function(err) {
  if (err) {
    console.log(err)
  } else {
    open(`${host}:${port}`)
  }
})
