import React, { Component, Fragment } from 'react';
import { WriterWrapper } from '../style';
import { connect } from 'react-redux';

class Writer extends Component {
  render() { 
    return (
      <Fragment>
        {
          this.props.list.map((item) => {
            return (
              <WriterWrapper key={item.get('id')}>
                {item.get('title')}
                <img className="pic" src={item.get('imgUrl')} alt="" />
              </WriterWrapper>
            )
          })
        }
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
});
 
export default connect(mapState, null)(Writer);