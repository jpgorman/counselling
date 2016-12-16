var path = require("path")
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var CopyStaticAssetsPlugin = require("copy-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var theme = require("./theme")
var cssFunctions = require("../postcss-functions")(theme)
var postcssFunctions = require("postcss-functions")
var cssnext = require("postcss-cssnext")


module.exports = {
  entry: "./src/main.js",
  devtool: "cheap-module-source-map",
  output: {
    path: path.join(__dirname, "/../../dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap=inline")
      },
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        include: [
          path.resolve("./src/"),
        ],
        query: {
          presets: ["latest", "react"]
        }
      }
    ]
  },

  resolve: {
    alias: {
      "theme": path.resolve(__dirname, "./theme/index.js")
    }
  },

  postcss: function () {
    return [
      postcssFunctions({
        functions: cssFunctions
      }),
      cssnext,
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Cat Chappell - Counsellor",
      template: path.normalize(__dirname + "/./theme/templates/index.ejs"),
    }),
    new CopyStaticAssetsPlugin([
      {
        from: path.normalize(__dirname + "/./theme/assets"),
        to: "assets",
      },
    ]),
    new ExtractTextPlugin("style.css", { allChunks: true }),
  ]
}
