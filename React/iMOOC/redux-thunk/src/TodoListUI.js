import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

// 当一个组件只有一个render函数，就可以用无状态组件来替换这个组件
// 无状态组件的优势：性能比较高，无状态组件就是一个函数，但是普通组件还要执行生命函数等别的东西，性能不高。
const TodoListUI = (props) => {
  return ( 
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input 
          value={props.inputValue} 
          placeholder='todo info' 
          style={{width: '300px', marginRight: '10px'}}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
      </div>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
    </div>
  );
}
 
export default TodoListUI;

/*
class TodoListUI extends Component {
  render() { 
    return ( 
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input 
            value={this.props.inputValue} 
            placeholder='todo info' 
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>Submit</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
        />
      </div>
    );
  }
}
*/