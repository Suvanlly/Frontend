import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 这些代码用处是 可以既使用 redux-devtools 又使用middleware thunk，具体逻辑可以参考redux-devtools文档
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;