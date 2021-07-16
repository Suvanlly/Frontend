import { createStore } from 'redux';
import reducer from './reducer';

// 把笔记本reducer作为参数传给store
const store = createStore(reducer);

export default store;