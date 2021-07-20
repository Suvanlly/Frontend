import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import axios from 'axios';
import './style.css';

class TodoList extends Component {
  // 当使用组件的时候，constructor的优先级最高，是最优先被执行的函数
  // constructor(props)是接受props参数，super(props)调用父类props的方法
  constructor(props) {
    super(props);
    // this.state表示这个组件的状态，react里需要把数据定义在状态里 负责存储component里面的数据
    this.state = {
      inputValue: "", // 这是输入框里input value的值
      list: [] //这是列表里面的每一项
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  
  render() {
    return (
      // Fragment可以代替div实现外层包裹，从而不影响布局，并且不会产生无用的div盒子
      <Fragment>
        <div>
         <label htmlFor="insertArea">Input here</label>
          <input
            // 当render执行的时候，input里面的value被渲染成了this.state.inputValue的值
            id="insertArea"
            className='input'
            value={this.state.inputValue} //加大括号是因为this.state.inputValue 是JS表达式，在JSX语法中使用JS表达式需要大括号
            // 当你在Input框里输入内容的时候，onChange就会被执行，监听Input框里的值的变化，并且事件绑定的时候需要用 bind(this)对函数的作用域进行变更
            onChange={this.handleInputChange}
            /> 
          <button onClick={this.handleBtnClick}> Submit </button>
        </div>
        <ul > 
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
  // 生命周期函数，只在组件被挂载到页面上时执行一次
  // AJAX请求就放在componentDidMount里 不会有任何问题最合适
  componentDidMount() {
    axios.get('/api/todolist')
    .then(()=>{alert('success')})
    .catch(()=>{alert('error')})
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
          <TodoItem 
            key={index}
            content={item} 
            index={index}
            deleteItem={this.handleItemDelete}
          /> 
      )
    })
  }

  handleInputChange(e) {
    // 如果想改变State里面的数据项的内容，不能直接更改，需要通过setState来进行变更
    // 你在Input框里输入的什么内容可以从e.target.value获取到，并用setState把InputValue的值设置成你输入的内容，随之页面也会改变
    const value = e.target.value;
		this.setState(() => ({
    // React里面必须使用this.setState来改变State里面的数据
			inputValue: value
		}));
  }
  handleBtnClick() {
    this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		}));
  }
  handleItemDelete(index) {
    // 需要利用const先拷贝出一个副本，不能直接修改State里的内容，因为immutable特性
    this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list}
		});
  }
}

export default TodoList;
// export default把该组件导出
