/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { HomeLeft, HomeRight, HomeWrapper } from './style';

class Home extends Component {
  render() { 
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="image" src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0425%2F77f21f05j00q9c7j00036c000m3009lm.jpg&thumbnail=650x2147483647&quality=80&type=jpg" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }
}
 
export default Home;