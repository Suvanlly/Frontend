import React, { Component } from 'react';
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

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  render() { 
    return (
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
            <NavSearch 
              // 如果现在是focus状态，就让NavSearch增加一个class叫’focused’， 否则就什么class都没有；因为focused初始值是false所以目前什么class都没有
              className={this.state.focused ? 'focused': ''} 
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
            ></NavSearch>
            <i className={this.state.focused ? 'focused iconfont': 'iconfont'}>&#xe612;</i>
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
    );
  }

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}
 
export default Header;