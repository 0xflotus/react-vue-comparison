var webpack = require('webpack')

module.exports = {
  entry: './index.js',

  output: {
    path: './',
    filename: 'index.min.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
};
