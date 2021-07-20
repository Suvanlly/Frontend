import React, {Component} from 'react';
import store from './store';
import { getAddItemAction, getDeleteItemAction, getInputChangeAction, initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component {

  // 调用store里面的数据
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    // 让组件订阅store的数据，只要store的数据发生变化，subscribe里面的函数就自动被执行
    store.subscribe(this.handleStoreChange)
    // console.log(store.getState())
  }

  componentDidMount() {
    // Redux中发送异步请求获取数据
    axios.get('https://www.fastmock.site/mock/ef583257e8a4a1667c21df6b42c8769f/getList/list')
    .then((res) => {
        const data = res.data;
        const action = initListAction(data)
        store.dispatch(action);
    })
  }

  handleInputChange(e) {
    // 创建action，value就是改变成e.target.value
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action); // 把这个action传给store
    // 打印出input改变的值
    // console.log(e.target.value);
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    // 当感知到store数据变化时，用getStore方法重新调取store里面的数据，
    // 用setState替换掉当前的store里面的数据，这样组件的数据就和store里面同步
    this.setState(store.getState());
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
}

export default TodoList;
