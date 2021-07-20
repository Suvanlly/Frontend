import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        //这里的this永远指向TodoItem
    }
    
    // 生命周期函数
    shouldComponentUpdate(nextProps, nextState) {
        // nextProps指的是当组件被更新的时候Props会被更新成什么样，nextState指的是State会变成什么样
        if(nextProps.content !== this.props.content) {
        // 接下来Props里面的content如果不等于当前props里面的content，也就是content发生了变化才返回true才需要被渲染，如果没变化则不需要
            return true;
        }else {
            return false;
        }
    }

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>)
    }
    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
    
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}
export default TodoItem;