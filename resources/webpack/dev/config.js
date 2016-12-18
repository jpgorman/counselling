var webpack = require("webpack")
var baseConfig = require("../config")

module.exports = function(baseConfig) {

  const basePlugins = baseConfig.plugins

  baseConfig.plugins = basePlugins.concat([
    new webpack.DefinePlugin({
      MODE: JSON.stringify("DEV"),
      BUILD_DATE: JSON.stringify(new Date()),
      "process.env": {
        "NODE_ENV": JSON.stringify("development"),
      },
    }),
  ])

  baseConfig.devtool = "source-map"
  baseConfig.output.filename = "bundle.js"

  return baseConfig

}(baseConfig)
