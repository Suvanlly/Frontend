import React, { Component } from 'react';
import { connect } from 'react-redux'; //connect是react-redux提供的核心API之一

class TodoList extends Component {


/* constructor(props) {
     super(props);
     this.state = store.getState();
  } */

  render() { 
    return (
      <div>
        <div>
          <input 
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
          />
          <button>Submit</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
/* connect方法的意思是 让TodoList组件和store连接, 并且将store里数据的inputValue
映射到组件的props的inputValue里面，这样在17行就变成了value={this.props.inputValue}
而不是value={this.state.inputValue}
*/