import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';

class List extends Component {
  render() { 
    return (
      <div>
        {
          this.props.list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="pic" src={item.get('imgUrl')} alt='news'/>
                <ListInfo>
                  <h3>{item.get('title')}</h3>
                  <p>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList'])
})
export default connect(mapState)(List);