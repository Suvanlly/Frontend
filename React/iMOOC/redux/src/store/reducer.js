/* eslint-disable import/no-anonymous-default-export */
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}
// Reducer相当于一个笔记本，state可以理解为整个store仓库里存储的数据（或者理解为之前的数据），action是当前要做的事
// reducer可以接受state，但是绝不能修改state
export default (state = defaultState, action) => {

  if (action.type === CHANGE_INPUT_VALUE) {
    // 拷贝原来的store的数据，并且把里面的input value改成新的值，就完成了公用数据store里值的修改
    const newState = JSON.parse(JSON.stringify(state)); 
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
    // console.log(newState)
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
    // console.log(newState)
  }

  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  // console.log(state, action);
  return state;
}