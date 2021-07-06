import React, { Component, Fragment } from "react";
import JiejieItem from "./JiejieItem";

class Jiejie extends Component {
  //生命周期：在某一时刻可以自动执行的函数
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["Head Massage", "Foot Massage"],
    };
  }

  componentWillMount() {
    console.log("componentWillMount-----组件将要挂载到页面的时候");
  }
  componentDidMount() {
    console.log("componentDidMount-----组件挂载完成的时刻");
  }
  shouldComponentUpdate() {
    console.log("1-shouldComponentUpdate"); //在组件更新前执行
    return true;
  }
  componentWillUpdate() {
    console.log("2-componentWillUpdate");
    //在shouldComponentUpdate之后执行，如果shouldComponentUpdate返回false则生命周期不执行了
  }
  componentDidUpdate() {
    console.log("4-componentDidUpdate");
    //所有步骤执行完了，最后执行DidUpdate
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  render() {
    console.log("3-render-----组件挂载中");
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.addList.bind(this)}> Add Service </button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <JiejieItem
                key={index + item}
                content={item}
                index={index}
                deleteItem={this.deleteItem.bind(this)}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }

  inputChange() {
    this.setState({
      inputValue: this.input.value,
    });
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
    });
  }

  deleteItem(index) {
    let newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  }
}

export default Jiejie;
