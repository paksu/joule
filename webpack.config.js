var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: [
    // for hot reload
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
     // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs
    './assets/js/index',
  ],

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
      // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
      publicPath: 'http://localhost:3000/assets/bundles/',
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      // we pass the output from babel loader to react-hot loader
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'], },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
};
