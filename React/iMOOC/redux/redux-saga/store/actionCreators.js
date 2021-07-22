import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from "./actionTypes";

// 将action放在actionCreators 统一管理，这样提高了代码的可维护性，并且前端自动化测试工具也会很方便

export const getInputChangeAction = (value) => ({
  // type里面描述做什么事（这里是告诉store改变input value）
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

export const getInitList = () => ({
  type: GET_INIT_LIST
});
