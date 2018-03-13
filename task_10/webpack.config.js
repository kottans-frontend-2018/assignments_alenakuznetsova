var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
const path = require('path');
const css = require('./webpack/css');

var isProd = process.env.NODE_ENV === 'production'; 
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract ({
  fallback: 'style-loader',  
  use: [{
      loader: 'css-loader'
    }, {
      loader: 'sass-loader'
    }],                    
    publicPath: '/dist'
}) 
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: cssConfig,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },         
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf)$/,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader'    
        ]
      }
    ]                               
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Template',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.pug'
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    })
  ]
}