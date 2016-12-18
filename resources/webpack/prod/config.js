var webpack = require("webpack")
var baseConfig = require("../config")

module.exports = function(baseConfig) {

  const basePlugins = baseConfig.plugins

  baseConfig.plugins = basePlugins.concat([
    new webpack.DefinePlugin({
      MODE: JSON.stringify("production"),
      BUILD_DATE: JSON.stringify(new Date()),
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
  ])

  baseConfig.devtool = "source-map"
  baseConfig.output.filename = "bundle.min.js"

  return baseConfig

}(baseConfig)
