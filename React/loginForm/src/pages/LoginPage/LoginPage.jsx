import React, { Component } from "react";
import Header from "../../component/Header/Header";
import Login from "../../component/Login/Login";
import { Background } from "../HomePage/styles/HomePage";

class LoginPage extends Component {
  render() {
    return (
      <Background>
        <Header />
        <Login />
      </Background>
    );
  }
}

export default LoginPage;
