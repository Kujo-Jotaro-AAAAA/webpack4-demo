/*
 * @Author: LaoZhang
 * @Date: 2020-06-14 11:21:48
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-06-14 16:20:50
 * @Description: 文件说明
 * @FilePath: /jeek-study/build/webpack.prod.js
 */ 
'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const config = require('./config')
module.exports = merge(webpackConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({ // css 压缩
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new HtmlWebpackPlugin(config.prodConfig.htmlWebpackOption),
  ]
});