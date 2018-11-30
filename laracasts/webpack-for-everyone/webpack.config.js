/**
 * webpack.config.js
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
}