import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
  .image {
    height: 240px;
  }
`
export const HomeRight = styled.div`
  float: right;
  width: 240px;
`
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
`
export const TopicItem = styled.div`
  float: left;
  height: 50px;
  line-height: 50px;
  padding-right: 10px;
  margin-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`