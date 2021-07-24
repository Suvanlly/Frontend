import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas';

// composeEnhancers也是中间件，意思是如果window下面有这个变量，就执行这个变量对应的方法,有这个代码 inspector才可以用redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySagas);

export default store;

// redux知识点补充，store是唯一的，只有store能改变自己的内容