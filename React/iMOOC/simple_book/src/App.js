import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

class App extends Component {
  render() { 
    return (
      // provider把store里面的数据都提供给了内部的header组件
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}
 
export default App;

