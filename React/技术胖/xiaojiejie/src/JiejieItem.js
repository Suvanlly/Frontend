import React, { Component } from 'react';
import PropTypes from 'prop-types'

class JiejieItem extends Component {
  constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
      //为什么要在constructor里bind(this)？因为比起在<li>里直接绑定更加优化性能
  }
  //生命周期中最难理解的一部分，需要满足两个条件
  //组件第一次存在于DOM中，函数不会被执行；如果已经存在于DOM中，函数才会被执行
  componentWillReceiveProps(){
    console.log('child-componentWillReceiveProps');
  }
  componentWillUnmount(){
    //组件将要被删除但没有被删除时执行
    console.log('child-componentWillUnmount');
  }

  render() { 
    console.log('child-render');
    return ( 
      //props 是属性的意思；因为Jiejie.js里24行写的是content，所以这里也要写this.props.content获取输入的值
      <li onClick={this.handleClick}> 
      {this.props.avname}为你服务-{this.props.content} 
      </li> 
     );
  }

  handleClick(){
    this.props.deleteItem(this.props.index)
  }
}

// 校验Jiejie.js文件里的JiejieItem组件里的内容
JiejieItem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
JiejieItem.defaultProps={
    avname:'Fiona'
}

export default JiejieItem;