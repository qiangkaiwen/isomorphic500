var webpack = require('webpack');

module.exports = {
  // Entry point for static analyzer:
  // entry: './client/main',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server',
    './src/client/main'
  ],

  output: {
    // Where to put build results when doing production builds:
    // (Server doesn't write to the disk, but this is required.)
    path: __dirname,

    // Filename to use in HTML
    filename: 'main.js',

    // Path to use in HTML
    publicPath: 'http://localhost:3001/js/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      // Pass *.jsx files through jsx-loader transform
      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'jsx']
      }
    ]
  },

  externals: {
    // Showdown is not is node_modules,
    // so we tell Webpack to resolve it to a global
    // 'showdown': 'window.Showdown'
  }
};