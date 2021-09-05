import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import './statics/iconfont/iconfont.css'

// 这段代码意思是在DOM下的root节点下render出 <App />这个出口文件
// React.StrictMode可以有一些debug机制,提供一些warning
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
