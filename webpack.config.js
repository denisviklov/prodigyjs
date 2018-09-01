 var path = require('path');
 var webpack = require('webpack');
 module.exports = {
    mode: 'production',
    entry: './src/prodigy.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'prodigy.min.js'
     },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env']
          }
        }
      ]
     },
      stats: {
        colors: true
      },
      devtool: 'source-map'
 };