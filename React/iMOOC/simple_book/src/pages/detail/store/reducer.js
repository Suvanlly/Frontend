/* eslint-disable import/no-anonymous-default-export */
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  title: '',
  content:''
})
export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}