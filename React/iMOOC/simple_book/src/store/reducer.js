import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from "../pages/detail/store";
import { reducer as loginReducer } from "../pages/login/store";
// 因为每个store下面的reducer都一样的名字，所以import的时候要重新改名，{reducer as homeReducer}就是这个意义

export default combineReducers({
  // 把headerReducer名字进一步简化改成header
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})