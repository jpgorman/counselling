var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  devtool: "cheap-module-source-map",
  output: {
    path: path.join(__dirname, "../../dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader")
      },
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["latest", "react"]
        }
      }
    ]
  },

  postcss: [
    require("autoprefixer-core"),
  ],

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ]
}
