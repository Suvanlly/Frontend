import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'

// 动态传值步骤：设置规则--传递值--接受值--显示内容

function AppRouter() {
  return (
      <Router>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/list/123">List</Link></li>
          </ul>
          <Route path="/" exact component={Index} /> 
          <Route path="/list/:id"  component={List} />
      </Router>
  )
}

export default AppRouter