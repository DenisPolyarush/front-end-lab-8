const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
  new UglifyJSPlugin({
    sourceMap: true
  }),
  new OptimizeCssAssetsPlugin(),
  new BundleAnalyzerPlugin()
  ]
});