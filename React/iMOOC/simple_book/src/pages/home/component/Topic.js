/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { TopicItem, TopicWrapper } from '../style';

class Topic extends Component {
  render() { 
    return (
      <TopicWrapper>
        <TopicItem>
          <img className="topic-pic"src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/150px-BBC_News_2019.svg.png' />
          Hit Topics
        </TopicItem>
        <TopicItem>
          <img className="topic-pic"src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/150px-BBC_News_2019.svg.png' />
          Hit Topics
        </TopicItem>
        <TopicItem>
          <img className="topic-pic"src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/150px-BBC_News_2019.svg.png' />
          Hit Topics
        </TopicItem>
        <TopicItem>
          <img className="topic-pic"src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/150px-BBC_News_2019.svg.png' />
          Hit Topics
        </TopicItem>
      </TopicWrapper>
    );
  }
}
 
export default Topic;