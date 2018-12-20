/**
 * webpack.config.js
 */

var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
          // Approach #1:
          // use: [
          //   {
          //     loader: 'css-loader',
          //     options: {
          //       url: false
          //     }
          //   },
          //   'sass-loader'
          // ],

          // Approach #2:
          // use: ['raw-loader', 'sass-loader'],

          // Approach #3:
          use: ['css-loader', 'sass-loader'],

          fallback: 'file-loader'
        })
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
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

    new webpack.LoaderOptionsPlugin({
      minimize: inProduction
    })
  ]
}
