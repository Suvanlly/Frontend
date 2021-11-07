import React from 'react'
import {Link, withRouter } from "react-router-dom";
import { Button, HeaderWrap } from './styles/header'

const Header = () => (
  <HeaderWrap>
    <Link to="/">
      <Button>
        HOME
      </Button>
    </Link>
    <Link to="/login">
      <Button>
        LOGIN
      </Button>
    </Link>
    <Link to="/help">
      <Button>
        HELP CENTER
      </Button>
    </Link>
    <Link to="/about-us">
      <Button>
        ABOUT US
      </Button>
    </Link>
  </HeaderWrap>
)

// 这个withRouter是什么意思？
export default withRouter(Header);