var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'react']
        }
      }
    ]
  },
}
