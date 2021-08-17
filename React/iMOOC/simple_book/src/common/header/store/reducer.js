/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// immutable这个库可以把一个JS对象转化成immutable对象
const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象,并没有改变原本的内容
    return state.set('focused', true);
    /* return {
        focused: true
      } */
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state;
}