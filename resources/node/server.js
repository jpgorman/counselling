/*eslint-disable no-console */
const {reduce} = require("ramda")
const prismic = require("prismic.io")
const express = require("express")
const path = require("path")
const open = require("open")
const compression = require("compression")
const helmet = require("helmet")
const session = require("cookie-session")

const allowCrossDomain = require("./middleware/allow-cross-domain")

const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
const port = process.env.PORT
const host = process.env.HOST
const apiEndPoint = process.env.apiEndPoint
const app = express()

const errorMap = {
  404: "404 not found",
  500: "Internal Server Error",
}

const errorHandler = (res) => (err) => {
  res.status(err.status).send(errorMap[err.status] || errorMap[500])
}

const responseHandler = (res, handler) => (data) => {
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(handler(data)))
}

const htmlSerializer = (element, content) => {
  // make all links external
  if (element.type == "hyperlink") {
    return `<a href="${element.url}" class="link" target="_blank">${content}</a>`
  }

  // Return null to stick with the default behavior
  return null
}

const getPage = (page) => {
  return ({
  "uid": page.uid,
  "page_template.title": page.getText("page_template.title"),
  "page_template.banner": page.getImage("page_template.banner"),
  "page_template.sections": page.getGroup("page_template.section").asHtml(() => null, htmlSerializer),
  "page_template.map_url": page.getLink("page_template.map_url"),
})}

const getBlogPost = (post) => ({
  "uid": post.uid,
  "blog_post.date": post.getTimestamp("blog_post.date"),
  "blog_post.thumbnail": post.getImage("blog_post.thumbnail"),
  "blog_post.img": post.getImage("blog_post.img"),
  "blog_post.title": post.getText("blog_post.title"),
  "blog_post.summary": post.getText("blog_post.summary"),
  "blog_post.body": post.getStructuredText("blog_post.body").asHtml(() => null, htmlSerializer),
})

const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date)

const getBlogPosts = ({results}) => {
  return reduce((accum, post) => {
    accum.push(getBlogPost(post))
    return accum
  }, [], results).sort(sortByDateDesc)
}

const api = () => prismic.api(apiEndPoint)
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
app.use(allowCrossDomain)

app.get("/posts", function(req, res) {
  api().then(function(api) {
    return api.query(
      prismic.Predicates.at("document.type", "blog_post"),
      { orderings : "[document.first_publication_date desc]" }
    )
  })
  .then(responseHandler(res, (data) => getBlogPosts(data)))
  .catch(errorHandler(res))
})

app.get("/posts/:uid", function(req, res) {
  const uid = req.params.uid
  api().then(function(api) {
    return api.getByUID("blog_post", uid)
  })
  .then(responseHandler(res, (data) => getBlogPost(data)))
  .catch(errorHandler(res))
})

app.get("/page/:uid", function(req, res) {
  const uid = req.params.uid
  api().then(function(api) {
    return api.getByUID("page_template", uid)
  })
  .then(responseHandler(res, (data) => getPage(data)))
  .catch(errorHandler(res))
  
})

app.get("*", function(req, res) {
  try {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
  } catch (e) {
    errorHandler(res)
  }

})

app.listen(port, function(err) {
  if (!err) {
    open(`${host}:${port}`)
  }
})
