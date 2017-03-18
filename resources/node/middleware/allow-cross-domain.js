const config = require("config")
// Pushing config for CORS policy (you can set this in your app/config if you need a specific ip.)
const ORIGINS = [
  "http://www.catchappell.co.uk",
]

// Default CORS for emulate-device.html
if (config.isDev) {
  ORIGINS.push("http://localhost:8777")
  ORIGINS.push("http://localhost:5000")
}

module.exports = function allowCrossDomain(req, res, next) {
  // only applies to xhr requests
  let referer
  if (req.get("origin"))
    referer = req.get("origin").toLowerCase()

  if (!referer) {
    return next()
  }
  if (ORIGINS.indexOf(referer) >= -1) {
    res.header("Access-Control-Allow-Origin", referer)
  } else if (req.method === "OPTIONS") {
    console.log(1, `Incorrect origin: ${referer}, none shall pass!`, {referer})
  }

  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT")
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,X-CSRF-Token,Content-Type,Authorization,Authorization-Mode"
  )
  res.header("Access-Control-Allow-Credentials", "true")

  if (req.method !== "OPTIONS") {
    return next()
  }
  res.sendStatus(200)
}
