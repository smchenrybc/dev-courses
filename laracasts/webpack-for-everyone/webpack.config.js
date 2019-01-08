/**
 * webpack.config.js
 */

// const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  target: "node",
  externals: "",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          },
          {
            loader: "img-loader",
            options: {
              plugins: [
                require('imagemin-gifsicle')({}),
                require('imagemin-mozjpeg')({}),
                require('imagemin-optipng')({}),
                require('imagemin-svgo')({})
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist", {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
};