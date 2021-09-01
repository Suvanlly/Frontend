import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
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

  getList() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <InfoItem key={i}>{newList[i]}</InfoItem>
          // 这里Dell老师写的是key={newList[i]},但是由于我的headerList文件有重复的数据，所以报错
        )
      }
    }
    
    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <InfoTitle>
            Rencent Search
            <InfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              {/* 当infoSwitch被点击的时候会执行handleChangePage这个function */}
              <i ref={(icon) => {this.spinIcon = icon}}className="iconfont spin">&#xe852;</i>
              Shuffle
            </InfoSwitch>
          </InfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
    return(
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          {
            login ? <NavItem onClick={logout} className='right'>Log out</NavItem> : <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe939;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch 
                // 如果现在是focus状态，就让NavSearch增加一个class叫’focused’， 否则就什么class都没有；因为focused初始值是false所以目前什么class都没有
                className={focused ? 'focused': ''} 
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe612;</i>
            {this.getList()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button>
              <i className="iconfont">&#xe708;</i>
              <span>Write</span>
            </Button>
          </Link>
          <Button>Register</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // 因为此时header下reducer里面的state已经变成immutable了，调用focused对象只能使用get(),不能像之前一样直接写state.header.focused
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
    // getIn 是啥意思 不太理解，为什么totalPage在header里面？
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // 只有在List.size等于0的时候，也就是没有数据的时候，才请求数据；有数据则不请求
      (list.size === 0) && dispatch(actionCreators.getList());
      const action = actionCreators.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
        // 用十进制把originAngle转换为数字
      }else {
        originAngle = 0;
        // 初始值设置为0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (page < totalPage) {
        // 如果当前页面小于总页数，点击当前页面的shuffle换到下一页；如果已经在最后一页，就换到第一页
        dispatch(actionCreators.changePage(page + 1));
      } else {
      dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);