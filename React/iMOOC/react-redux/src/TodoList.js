import React, { Component } from 'react';
import { connect } from 'react-redux'; //connect是react-redux提供的核心API之一

class TodoList extends Component {


/* constructor(props) {
     super(props);
     this.state = store.getState();
  } */

  render() { 
    // console.log(this.props.list)
    const { inputValue, changeInputValue, handleClick, list, handleDelete } = this.props;
    return (
      <div>
        <div>
          <input 
            value={inputValue}
            onChange={changeInputValue}
          />
          <button onClick={handleClick}>
            Submit
          </button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li onClick={() => handleDelete(index)} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },

    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },

    handleDelete(index) {
      const action = {
        type: 'delete_item',
        index
      }
      console.log(action.index)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
/* connect方法的意思是 让TodoList组件和store连接, 并且将store里数据的inputValue
映射到组件的props的inputValue里面，这样在17行就变成了value={this.props.inputValue}
而不是value={this.state.inputValue}
*/