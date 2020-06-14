/*
 * @Author: LaoZhang
 * @Date: 2020-06-14 10:21:12
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-06-14 16:09:56
 * @Description: 文件说明
 * @FilePath: /jeek-study/src/index.js
 */ 
import React from 'react';
import ReactDom from 'react-dom';
import './assets/index.less';
class App extends React.Component {
  render() {
    return <div>入口</div>
  }
}

ReactDom.render(
  <App />,
  document.querySelector('#app')
)
