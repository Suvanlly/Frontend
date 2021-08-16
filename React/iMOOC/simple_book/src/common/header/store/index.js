// 这个文件相当于store文件夹下面所有文件的出口文件，直接import此index文件，就相当于引用了所有的文件
import reducer from './reducer';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';

export { reducer, actionCreators, actionTypes };