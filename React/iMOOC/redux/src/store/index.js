import { createStore } from 'redux';
import reducer from './reducer';

// 把笔记本reducer作为参数传给store
const store = createStore(
  reducer,
  // 这句话意思是：如果window下面有这个变量，就执行这个变量对应的方法,有这个代码 inspector才可以用redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;