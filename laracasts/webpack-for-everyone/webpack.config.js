/**
 * webpack.config.js
 */

var webpack = require("webpack");
var path = require("path");
var glob = require("glob");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var PurifyCSSPlugin = require("purifycss-webpack");
var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: {
    app: [
      './src/main.js',
      './src/main.scss'
    ]
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'file-loader'
        })
      },
      {
        test: /\.(gif|jpeg|jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),

    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'index.html')),
      minimize: inProduction
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: inProduction
    })
  ]
}
