const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context : path.resolve('src'),
  entry : {
    'bundle.js' : ['./js/calculating-module.js', './js/interface-module.js', './js/output-module.js']
  },
  output : {
    path: path.resolve('dist'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test : /\.js$/,
        use : [
          {loader: "babel-loader"}
        ],
        exclude : /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  watch : true
}