let webpack = require('webpack');
let path = require('path');

let minifyVal;

if (process.env.NODE_ENV && (process.env.NODE_ENV === "production")) {
  minifyVal = true;
} else {
  minifyVal = false;
}

module.exports = {
  entry: {
    app: './resources/assets/js/app.js'
  },
  mode: 'none',

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js',
    publicPath: './public',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  optimization: {
    minimize: minifyVal,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /(axios|vue)/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
}