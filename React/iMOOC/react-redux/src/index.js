import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
// react-redux的核心API之一是Provider
import { Provider } from 'react-redux';
import store from './store';

const App = (
  // provider和store做了关联，所以它内部所有组件都可以获取store里面数据
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
