import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  InfoTitle,
  InfoSwitch,
  InfoItem,
  SearchWrapper
} from './style'

class Header extends Component {

  getList(show) {
    if(show) {
      return (
        <SearchInfo>
          <InfoTitle>
            Rencent Search
            <InfoSwitch>Shuffle</InfoSwitch>
          </InfoTitle>
          <div>
            <InfoItem>food</InfoItem>
            <InfoItem>life</InfoItem>
            <InfoItem>food</InfoItem>
            <InfoItem>life</InfoItem>
            <InfoItem>food</InfoItem>
            <InfoItem>life</InfoItem>
          </div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    return(
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe939;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch 
                // 如果现在是focus状态，就让NavSearch增加一个class叫’focused’， 否则就什么class都没有；因为focused初始值是false所以目前什么class都没有
                className={this.props.focused ? 'focused': ''} 
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe612;</i>
            {this.getList(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button>
            <i className="iconfont">&#xe708;</i>
            <span>Write</span>
          </Button>
          <Button>Register</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused')
    // 因为此时header下reducer里面的state已经变成immutable了，调用focused对象只能使用get(),不能像之前一样直接写state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);