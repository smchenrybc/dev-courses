/**
 * webpack.config.js
 */

var webpack = require("webpack");
var path = require("path");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: ['jquery']
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
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
    new webpack.LoaderOptionsPlugin({
      minimize: inProduction
    }),

    function() {
      this.plugin('done', stats => {
        require('fs').writeFileSync(
          path.join(__dirname, 'dist/manifest.json'),
          JSON.stringify(stats.toJson().assetsByChunkName)
        )
      });
    },

    new CleanWebpackPlugin(['dist'], {
        root: __dirname,
        verbose: true,
        dry: false
      }
    ),

    function() {
      this.plugin('done', stats => {
        require('fs').writeFileSync(
          path.join(__dirname, 'dist/manifest.json'),
          JSON.stringify(stats)
        )
      })
    }
  ]
}
