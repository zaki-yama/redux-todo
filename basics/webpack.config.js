const webpack = require('webpack');

module.exports = {
  entry: __dirname + "/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  // Configuration for dev server
  devServer: {
    contentBase: 'dist',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
  },

  plugins: [
    // Allows for sync with browser while developing (like BorwserSync)
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
  // http://webpack.github.io/docs/configuration.html#resolve-extensions
  //resolve: {
    //extensions: ['', '.js', '.jsx']
  //}
};
