import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getAddItemAction, getDeleteItemAction, getInputChangeAction } from './store/actionCreators'

class TodoList extends Component {

  // 调用store里面的数据
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // 让组件订阅store的数据，只要store的数据发生变化，subscribe里面的函数就自动被执行
    store.subscribe(this.handleStoreChange)
    // console.log(store.getState())
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
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input 
            value={this.state.inputValue} 
            placeholder='todo info' 
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>Submit</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList;
