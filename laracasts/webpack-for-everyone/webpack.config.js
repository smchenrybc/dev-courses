/**
 * webpack.config.js
 */

var path = require("path");
var webpack = require("webpack");
var inProduction = (process.env.NODE_ENV === 'production');
var BuildManfiestPlugin = require('./build/plugins/BuildManfiestPlugin');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
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
              name: "images/[name].[hash].[ext]"
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
    new webpack.LoaderOptionsPlugin({
      minimize: inProduction
    }),

    new BuildManfiestPlugin()
  ]
}

if (inProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}