import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() { 
    return (
      // provider把store里面的数据都提供给了内部的header组件
      <Provider store={store}>
        <Header />
      </Provider>

    );
  }
}
 
export default App;

