import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('https://www.fastmock.site/mock/ef583257e8a4a1667c21df6b42c8769f/getList/list')
    const action = initListAction(res.data);
    yield put(action);

  }catch(e) {
    console.log('error')
  }

}
// generator 函数
function* mySagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySagas;