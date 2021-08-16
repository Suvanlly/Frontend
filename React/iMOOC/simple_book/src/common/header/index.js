import React from 'react';
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
  SearchWrapper
} from './style'

const Header = (props) => {
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
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch 
              // 如果现在是focus状态，就让NavSearch增加一个class叫’focused’， 否则就什么class都没有；因为focused初始值是false所以目前什么class都没有
              className={props.focused ? 'focused': ''} 
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe612;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
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