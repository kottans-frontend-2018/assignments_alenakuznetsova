const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['images/*.png'], 'build/images', {use: [imageminPngquant()]}).then(() => {
	console.log('Images optimized');
});

const extractSass = new ExtractTextPlugin({
    filename: "app.sass",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
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
        port: 9000,
        open: true,
        hot: true
        },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            title: 'Template',
            template: './src/index.pug',
            disable: true
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
};