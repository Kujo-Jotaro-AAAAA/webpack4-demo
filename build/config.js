/*
 * @Author: LaoZhang
 * @Date: 2020-06-14 16:18:01
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-06-14 16:19:31
 * @Description: 文件说明
 * @FilePath: /jeek-study/build/config.js
 */
exports.devConfig = {
  htmlWebpackOption: {
    title: '基础构建--dev',
    template: 'index.html',
    filename: 'index.html',
    chunks: ['bundle'],
  }
}

exports.prodConfig = {
  htmlWebpackOption: {
    title: '基础构建',
    template: 'index.html',
    filename: 'index.html',
    chunks: ['bundle'],
    // inject: true,
    minify: {
      html5: true,
      collapseWhitespace: true,
      preserveLineBreaks: false,
      minifyCSS: true,
      minifyJS: true,
      removeComments: false
    }
  }
}