/* eslint-disable import/no-anonymous-default-export */
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

// immutable这个库可以把一个JS对象转化成immutable对象
const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.value)
    case actionTypes.LOGOUT:
      return state.set('login', action.value)
    default:
      return state;
  }
}