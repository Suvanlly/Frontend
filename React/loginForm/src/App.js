import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import HelpCenter from './pages/HelpCenter/HelpCenter.jsx';

// 为什么这里用function APP？ 不用class component？
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/help" exact component={HelpCenter} />
      </Switch>
    </BrowserRouter>
  )
}
 
export default App;

