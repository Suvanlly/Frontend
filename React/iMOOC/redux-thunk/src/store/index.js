import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// composeEnhancers也是中间件，意思是如果window下面有这个变量，就执行这个变量对应的方法,有这个代码 inspector才可以用redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  // 其实文档里面applyMiddleware括号里是展开运算符，所以不用写composeEnhancer，直接写thunk就行了
  applyMiddleware(thunk),
);

const store = createStore(
  // 把笔记本reducer作为参数传给store
  reducer,
  //用 enhancer可以同时使用两个中间件
  enhancer
);

export default store;

// redux知识点补充，store是唯一的，只有store能改变自己的内容