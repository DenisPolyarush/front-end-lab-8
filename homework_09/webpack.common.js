const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const path = require('path');

module.exports = {
	entry : "./src/app.js",
	output : {
    path : path.resolve(__dirname, './bin'),
		filename : "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test : /\.js$/,
        use : [
          {
            loader: "babel-loader"
          }
        ],
        exclude : /node_modules/
      }
    ]},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin('style.css'),
    new CleanWebpackPlugin(['bin']),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)    
  ]
}
