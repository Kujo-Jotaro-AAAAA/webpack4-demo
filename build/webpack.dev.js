/*
 * @Author: LaoZhang
 * @Date: 2020-06-14 11:21:33
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-06-14 15:47:46
 * @Description: 文件说明
 * @FilePath: /jeek-study/build/webpack.dev.js
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config')
module.exports = merge(webpackConfig, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '基础构建--dev',
      template: 'index.html',
      filename: 'index.html',
      chunks: ['bundle'],
      // inject: true
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
});