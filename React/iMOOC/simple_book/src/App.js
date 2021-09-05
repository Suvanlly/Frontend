import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import write from './pages/write';
import store from './store';

class App extends Component {
  render() { 
    return (
      // provider把store里面的combineReducer所有数据都提供给了内部的组件使用
      <Provider store={store}>
        <BrowserRouter>
          {/* 不建议把header写到App文件里，最好写到Home,Login,write每个page的render里面 */}
          <Header /> 
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}
 
export default App;

